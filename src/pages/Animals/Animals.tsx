import { AnimalCard } from "../../components/AnimalCard/AnimalCard";
import { NavBar } from "../../components/NavBar/NavBar";
import { getAnimals } from "../../services/getAnimals";
import "./Animals.css";

export const Animals = () => {
  const animalsData = getAnimals();
  console.log(animalsData);

  return (
    <div className="animals__container">
      <NavBar></NavBar>
      <h2>Here are our animals!</h2>
      <ul className="animals__list">
        <li>
          {animalsData.map((animal) => {})}
          <AnimalCard></AnimalCard>
        </li>
      </ul>
    </div>
  );
};
