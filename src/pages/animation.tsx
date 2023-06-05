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
import axios from "axios";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { store } from "@/Redux/store";
import { DATA_HOME_PAGE } from "@/Redux/homePage/action-types";

export const Cartoons = ({ res }: any) => {
  // const { data: session, status } = useSession();
  // console.log(session);
  // const router = useRouter();

  const handleClick = async () => {
    // store.dispatch({
    //   type: DATA_HOME_PAGE.GET_DATA_HOME_PAGE,
    //   payload: res,
    // });
    console.log(store.getState());
  };

  return (
    <div>
      <button onClick={handleClick}>123</button>
    </div>
  );
};

// export const getStaticProps = async () => {
//   const res = await axios({
//     method: "get",
//     url: "https://jsonplaceholder.org/posts/",
//     headers: {
//       "Content-Type": "application/json",
//       "X-Frame-Options": "SAMEORIGIN",
//     },
//   }).then((r) => r.data);
//   return {
//     props: {
//       res,
//     },
//   };
// };

export default Cartoons;
