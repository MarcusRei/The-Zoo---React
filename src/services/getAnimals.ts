import axios from "axios";
import { IAnimalResponse } from "../models/IAnimalResponse";
import { IAnimal } from "../models/IAnimal";

export async function getAnimals(): Promise<IAnimal[]> {
  const response = await axios.get(
    "https://animals.azurewebsites.net/api/animals"
  );

  return response.data;
}
