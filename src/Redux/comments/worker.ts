import { BannerType } from "@/types/types";
import main_banner from "@/data/Main_banner.json";
import axios from "axios";
import $api from "@/profileRequests/configeAxios";

export const SendCommentWorker = (
  parentReviewId: number | null,
  id: number,
  comment: string
) => {
  const userId = localStorage.getItem("id");
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  // const arrId = idComment.split(".");
  // const resId = arrId.map((item: string, index) => {
  //   return {
  //     id: item,
  //     parenId: arrId[index - 1] === undefined ? null : arrId[index - 1],
  //   };
  // });
  // console.log(resId);
  const currentUserId = +localStorage.getItem("idUser")!;
  const res = $api.post(
    `/film/${id}/comment`,
    {
      review: comment,
      parentReviewId: parentReviewId,
      profileId: currentUserId,
    },

    { httpsAgent: agent }
  );

  console.log(res);
};
