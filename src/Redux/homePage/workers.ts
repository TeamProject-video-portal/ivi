import { BannerType } from "@/types/types";
import main_banner from "@/data/Main_banner.json";
import axios from "axios";

export const getDataBannerWorker = async () => {
  const response = await axios.get("http://84.201.131.92:5003/home?lang=ru");

  return response.data;
};
