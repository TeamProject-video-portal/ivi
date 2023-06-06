import axios from "axios";

export const getMovieWorker = async (id: number, lang: string) => {
  const response = await axios.get(
    "https://jsonplaceholder.ir/users"
    // `http://84.201.131.92:5003/film/${id}?lang=${lang}`
  );
  return response.data;
};
