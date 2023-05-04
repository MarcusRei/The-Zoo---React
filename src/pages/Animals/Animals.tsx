import { useEffect, useState } from "react";
import { AnimalCard } from "../../components/AnimalCard/AnimalCard";
import { NavBar } from "../../components/NavBar/NavBar";
import { IAnimal } from "../../models/IAnimal";
import { getAnimals } from "../../services/getAnimals";
import "./Animals.css";
import { getFromLS, addToLS } from "../../utils/LSFunctions";
import { Link } from "react-router-dom";

export const Animals = () => {
  const [animalState, setAnimalState] = useState<IAnimal[]>(
    getFromLS("animals") || []
  );

  useEffect(() => {
    if (animalState.length === 0) {
      getAnimals().then((animals) => setAnimalState(animals));
    }
  }, []);

  addToLS("animals", animalState);

  console.log("Nu är vårt animalState: ", animalState);

  return (
    <div className="animals__container">
      <NavBar></NavBar>
      <h2>Det här är våra djur!</h2>
      <ul className="animals__list">
        {animalState.map((animal, index) => {
          return (
            <Link
              key={index}
              to={animal.id.toString()}
              className="animals__link"
            >
              <AnimalCard {...animal}></AnimalCard>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
