import { BannerType } from "@/types/types";
import main_banner from "@/data/Main_banner.json";
import axios from "axios";

export const SendCommentWorker = (
  idFilm: number,
  idComment: string,
  comment: string
) => {
  const userId = localStorage.getItem("id");
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const arrId = idComment.split(".");
  const resId = arrId.map((item: string, index) => {
    return {
      id: item,
      parenId: arrId[index - 1] === undefined ? null : arrId[index - 1],
    };
  });
  console.log(resId);
  // console.log(userId);
  // const res = axios.post(
  //   `https://84.201.131.92:5000/film/${+idFilm}/comment`,
  //   {
  //     id: idComment,
  //     review: comment,
  //     parentReviewId: null,
  //     profileId: +userId!,
  //     filmId: +idFilm,
  //   },
  //   { httpsAgent: agent }
  // );
  // console.log(res);
};
