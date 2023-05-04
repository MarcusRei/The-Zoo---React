import { useParams } from "react-router";
import { IAnimal } from "../models/IAnimal";
import { getFromLS } from "../utils/LSFunctions";
import { DetailedAnimalCard } from "../components/DetailedAnimalCard/DetailedAnimalCard";
import { NavBar } from "../components/NavBar/NavBar";

export const SpecificAnimal = () => {
  const params = useParams();

  const animals = getFromLS("animals");
  console.log("Det här är ", animals);
  console.log(params.id);

  const currentAnimal = animals.find((animal: IAnimal) => {
    return animal.id.toString() === params.id;
  });

  console.log(currentAnimal);
  if (currentAnimal === undefined) {
    return (
      <>
        <NavBar></NavBar>
        <h2>Oj nu vart det fel igen, välj ett annat djur!</h2>
      </>
    );
  } else {
    return (
      <>
        <NavBar></NavBar>
        <DetailedAnimalCard {...currentAnimal}></DetailedAnimalCard>
      </>
    );
  }
};
