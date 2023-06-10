import { IMovie } from "@/types/types";
import dataFilms from "@/data/Search_films_v2.json";
import { ISimpleMovie } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/router";

export const movieApi = async () => {
  const dataMovies = dataFilms as ISimpleMovie[];
  return dataMovies;
};

export const movieAllApi = async () => {
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await axios.get(`https://84.201.131.92:5003/movies?lang=ru`, {
    httpsAgent: agent,
  });

  // const response = await fetch(`https://84.201.131.92:5003/movies?lang=ru`);
  // const data = await response.json();

  return data;
};

export const editGenresApi = async (args: any) => {
  console.log("async genre edit");
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  const { data } = await axios({
    method: "PUT",
    url: `https://84.201.131.92:5003/admin/genres/${args.id}`,
    data: {
      name: args.genre,
    },
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};
