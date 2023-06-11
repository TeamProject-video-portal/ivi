import axios from "axios";
import NextAuth, { Account, Profile, User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import VkProvider from "next-auth/providers/vk";
import { userAgent } from "next/server";

interface CustomUser extends User {
  role: string;
}

const VK_CLIENT_ID = 51672772;
const VK_CLIENT_SECRET = "Myzf7Psrc376Twd6AcT6";

export default NextAuth({
  secret: process.env.SECRET,
  providers: [
    VkProvider({
      clientId: "51672772",
      clientSecret: "Myzf7Psrc376Twd6AcT6",
    }),
  ],

  callbacks: {
    async signIn(params) {
      const { user, account, profile } = params;

      return true;
    },

    async jwt({ token, user }) {
      console.log("token", token);
      return { token, user };
    },

    async session({ session, token }) {
      const response = await axios.get(
        `https://api.vk.com/method/users.get?access_token=${token.accessToken}&v=5.131`
      );
      const userData = response.data.response[0];
      session.user = {
        id: userData.id,
        name: `${userData.first_name} ${userData.last_name}`,
      };
      return session;
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },

  pages: {
    signIn: "/profile?lang=ru",
    signOut: "/home",
    error: "/profile",
  },

  jwt: {
    secret: "jwttoken",
  },
});
