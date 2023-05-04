import { addToLS, getFromLS } from "../../utils/LSFunctions";
import { IAnimal } from "../../models/IAnimal";
import "./DetailedAnimalCard.css";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

export const DetailedAnimalCard = ({ ...animal }: IAnimal) => {
  const [animalState, setAnimalState] = useState(animal);
  const animals = getFromLS("animals");

  function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "/assets/placeholder_square.jpg";
  }

  function feedAnimal() {
    const lastFed = DateTime.fromISO(animal.lastFed);

    const currentTime = DateTime.now().toISO({
      includeOffset: false,
    }) as string;

    setAnimalState({ ...animal, lastFed: currentTime });
  }

  return (
    <div className={"animal"}>
      <img
        className="animal__img"
        src={animal.imageUrl}
        alt=""
        onError={handleImageError}
      />
      <h2>{animal.name}</h2>
      <p>
        <strong>Latinskt artnamn:</strong> {animal.latinName}
      </p>
      <p>född: {animal.yearOfBirth}</p>
      <p className="animal__desc">{animal.shortDescription}</p>
      <p className="animal__desc">{animal.longDescription}</p>
      <p>
        Blev senast matad: <strong>{animalState.lastFed}</strong>
      </p>
      <button onClick={feedAnimal}>Mata {animal.name}!</button>
    </div>
  );
};
