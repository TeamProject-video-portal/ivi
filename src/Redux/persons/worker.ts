import { IPerson } from "@/types/types";

export const personsApi = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/person`);
  const dataPersons = (await response.json()) as IPerson[];
  return dataPersons;
};
