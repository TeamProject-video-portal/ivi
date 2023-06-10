import axios from "axios";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import { userAgent } from "next/server";
interface CustomUser extends User {
  role: string;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const user = {
        //   id: "1",
        //   name: `${credentials?.email}`,
        //   password: "jsmith@example.com",
        //   role: `${process.env.JWT_SECRET}`,
        //   // accessToken: tokens.access_token,
        // };

        // };
        // return user;
        //   const https = require("https");
        //   const agent = new https.Agent({
        //     rejectUnauthorized: false,
        //   });
        //   const user = await axios.post(
        //     "http://84.201.131.92:5000/users/login",
        //     {
        //       email: `${credentials?.email}`,
        //       password: `${credentials?.password}`,
        //     },
        //     { httpsAgent: agent }
        //   );
        // //   // const user = await res.json();
        //   if (user) {
        //     return user;
        //   } else {
        //     return null;
        //   }
        // },

        const user: Promise<any> = await fetch(
          "http://84.201.131.92:5000/users/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `${process.env.JWT_SECRET}`,
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        ).then((res) => res.json());
        // console.log("user", user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { token, user };
    },
    async session({ session, token }) {
      console.log("token", token);
      session.user = {
        token,
      };

      return session;
    },
  },
  // json: true,
  secret: process.env.JWT_SECRET,
  session: {
    strategy: "jwt",
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days
    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    //updateAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: "/animation",
    signOut: "/home",
    error: "/profile",
    //   signIn: '/auth/signin',
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  jwt: {
    secret: "jwttoken",
  },
});
