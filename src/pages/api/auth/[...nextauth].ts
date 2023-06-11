import axios from "axios";
import NextAuth, { User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import { userAgent } from "next/server";

// import  from `next-auth/providers/vk`
interface CustomUser extends User {
  role: string;
}

const VK_CLIENT_ID = 51672772;
const VK_CLIENT_SECRET = "Myzf7Psrc376Twd6AcT6";
export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    VkProvider({
      clientId: VK_CLIENT_ID.toString(),
      clientSecret: VK_CLIENT_SECRET,
    }),
  ],

  // callbacks: {
  //   async jwt({ token, user }) {
  //     return { token, user };
  //   },
  //   async session({ session, token }) {
  //     console.log("token", token);
  //     session.user = {
  //       token,
  //     };

  //     return session;
  //   },
  // },
  // json: true,
  // secret: process.env.JWT_SECRET,
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
