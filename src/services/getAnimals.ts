import axios from "axios";
import { IAnimalsResponse } from "../models/IAnimalsResponse";

export async function getAnimals() {
  const response = await axios.get(
    "https://animals.azurewebsites.net/api/animals"
  );

  const data = response.data;
  return data;
}
