import { IPerson } from "@/types/types";
import personsData from "@/data/persons.json";

export const personsApi = async () => {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/person`);
  //const response = await fetch(`http://localhost:3000/api/person`);
  //const dataPersons = (await response.json()) as IPerson[];
  const dataPersons = personsData.persons;
  return dataPersons;
};
