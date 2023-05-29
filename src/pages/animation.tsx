import ProfileButton from "@/components/Header/Buttons/Profile";
import Poster from "@/components/Poster";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getServerSession } from "next-auth";
import { getCsrfToken, getSession, signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import authOptions from "./api/auth/[...nextauth]";
import dataMovies from "@/data/Search_films_v2.json";
export const Cartoons = () => {
  const [content, setContent] = useState();
  // const { data: session, status } = useSession();
  // console.log(session);
  // const router = useRouter();

  const handleClick = async () => {
    // const { data: session } = useSession();
    // const payload = { username: "Maggie", password: "password" };
    // const res = await signIn("credentials", {
    //   ...payload,
    //   redirect: false,
    // });
    // console.log(session);
  };

  return <div>{/* {session && <div><div/>} */}</div>;
};

export default Cartoons;
