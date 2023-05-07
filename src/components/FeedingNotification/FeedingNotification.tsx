import { useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getFromLS } from "../../utils/LSFunctions";
import "./FeedingNotification.css";
import { DateTime, Interval } from "luxon";

export const FeedingNotification = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(getFromLS("animals"));

  const [hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);

  if (hungryAnimals.length === 0) {
    checkHunger();
  }

  setInterval(() => {
    checkHunger();
  }, 5000);

  function checkHunger() {
    const filterAnimals = animals.filter((animal) => {
      const lastFeeding = DateTime.fromISO(animal.lastFed);

      const currentTime = DateTime.now();
      const interval = Interval.fromDateTimes(lastFeeding, currentTime);
      return interval.length("hours") > 3;
    });
    setHungryAnimals(filterAnimals);
  }

  return (
    <div className="notification__container--outer">
      {hungryAnimals.map((animal) => {
        const altText = "Bild på " + animal.name;
        return (
          <div key={animal.id} className="notification__container--inner">
            <img
              className="notification__img"
              src={animal.imageUrl}
              alt={altText}
            />
            <p className="notification__text">
              {animal.name} behöver bli matad!
            </p>
          </div>
        );
      })}
    </div>
  );
};
