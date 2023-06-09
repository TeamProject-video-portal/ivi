import axios from "axios";

export const getDataBannerWorker = async () => {
  const https = require("https");
  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  const response = await axios.get("https://84.201.131.92:5003/home?lang=ru", {
    httpsAgent: agent,
  });

  return response.data;
};
