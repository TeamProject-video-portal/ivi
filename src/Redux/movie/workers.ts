import axios from "axios";
import data from "../../data/movie.json";
import { IMovieRes } from "@/types/types";
export const getDatMovieWorker = async (id: string | string[]) => {
  try {
    const https = require("https");
    const agent = new https.Agent({
      rejectUnauthorized: false,
    });
    const response = await axios.get(
      `https://84.201.131.92:5003/film/${id}?lang=ru`,
      { httpsAgent: agent, timeout: 5000 }
    );
    return response.data;
  } catch (e) {
    return new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
};
