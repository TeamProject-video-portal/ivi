import type { NextApiRequest, NextApiResponse } from "next";
import data from "@/data/Search_films_v2.json";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(data);
}
