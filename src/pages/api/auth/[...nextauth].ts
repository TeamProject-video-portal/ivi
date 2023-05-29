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
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = {
          id: "1",
          name: `${credentials?.username}`,
          password: "jsmith@example.com",
          role: "admin",
        };
        return user;
      },

      // const res = await fetch(`${process.env.NEXTAUTH_URL}/profile`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     email: credentials?.email,
      //     password: credentials?.password,
      //   }),
      // });
      // const user = await res.json();

      // if (user) {
      //   return user;
      // } else {
      //   return null;
      // }
      // },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        // token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.name) {
        session.user = {
          userId: 123,
          name: token.name,
          userRole: "admin",
        };
      }
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
