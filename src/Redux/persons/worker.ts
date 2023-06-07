import { IPerson } from "@/types/types";
import personsData from "@/data/persons.json";
import axios from "axios";

export const actorsApi = async () => {
  // const response = await axios.get("https://84.201.131.92:5002/persons");
  // return response.data;
  const dataPersons = personsData.persons;
  return dataPersons;
};

export const directorsApi = async () => {
  //const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/person`);
  //const response = await fetch(`http://localhost:3000/api/person`);
  //const dataPersons = (await response.json()) as IPerson[];
  const dataPersons = personsData.persons;
  return dataPersons;
};
