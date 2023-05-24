import { addToLS, getFromLS } from "../../utils/LSFunctions";
import { IAnimal } from "../../models/IAnimal";
import "./DetailedAnimalCard.css";
import { useEffect, useState } from "react";
import { DateTime, Interval } from "luxon";

export const DetailedAnimalCard = ({ ...animal }: IAnimal) => {
  const [animalState, setAnimalState] = useState(animal);
  const [animals, setAnimals] = useState(getFromLS("animals"));
  const [feedText, setFeedText] = useState(`Mata ${animalState.name}!`);
  //console.log("animals från början: ", animals);

  const happyCat: string = "/assets/happy_cat_alpha.png";
  const angryCat: string = "/assets/angry_cat_alpha.png";
  const sadCat: string = "/assets/sad_cat_alpha.png";

  function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "/assets/placeholder_square.jpg";
  }

  useEffect(() => {
    checkFoodLevel();
  }, []);

  function checkFoodLevel() {
    const lastFeeding = DateTime.fromISO(animal.lastFed);

    //const hungryAgain = lastFed.plus({ hours: 3 });

    const currentTime = DateTime.now();
    const interval = Interval.fromDateTimes(lastFeeding, currentTime);

    if (interval.length("hours") > 3) {
      setAnimalState({ ...animal, isFed: false });

      const animalIndex = animals.findIndex(
        (animal: IAnimal) => animal.id === animalState.id
      );

      const updatedAnimals: IAnimal[] = [...animals];

      updatedAnimals[animalIndex] = {
        ...animal,
        isFed: false,
      };

      setAnimals(updatedAnimals);

      addToLS("animals", updatedAnimals);
    }
  }

  function feedAnimal() {
    const lastFed = DateTime.fromISO(animal.lastFed);

    const currentTime = DateTime.now().toISO({
      includeOffset: false,
    }) as string;

    setAnimalState({ ...animal, lastFed: currentTime, isFed: true });

    const animalIndex = animals.findIndex(
      (animal: IAnimal) => animal.id === animalState.id
    );

    const updatedAnimals: IAnimal[] = [...animals];

    updatedAnimals[animalIndex] = {
      ...animal,
      lastFed: currentTime,
      isFed: true,
    };

    setAnimals(updatedAnimals);

    addToLS("animals", updatedAnimals);
  }

  /* if (animalState.isFed) {
    setFeedText(`${animalState.name} är mätt!`);
  } */
  //console.log("Den nya listan: ", animals);

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
      <div className="button__container">
        <button
          className={animalState.isFed ? "fed" : "hungry"}
          onClick={() => {
            if (!animalState.isFed) {
              feedAnimal();
            }
          }}
          disabled={animalState.isFed}
        >
          {feedText}
        </button>
        <img
          className="button__img"
          src={
            animalState.isFed
              ? happyCat
              : !animalState.isFed
              ? angryCat
              : sadCat
          }
          alt=""
        />
      </div>
    </div>
  );
};
