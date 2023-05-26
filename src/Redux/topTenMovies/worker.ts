import { BannerType } from "@/types/types";
import main_banner from "@/data/Main_banner.json";
import axios from "axios";

export const getDataTopMoviesWorker = async () => {
  const res = await axios({
    method: "get",
    url: "https://api.kinopoisk.dev/v1.3/movie",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": `13RH6Q2-2T1M1E7-M50R852-366EP7D`,
    },
    params: {
      Application: "13RH6Q2-2T1M1E7-M50R852-366EP7D",
      top10: "!null",
      selectFields: "id poster",
    },
  });
  return res.data.docs;
};
