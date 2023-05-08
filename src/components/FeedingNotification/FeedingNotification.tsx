import { useEffect, useState } from "react";
import { IAnimal } from "../../models/IAnimal";
import { getFromLS } from "../../utils/LSFunctions";
import "./FeedingNotification.css";
import { DateTime, Interval } from "luxon";

export const FeedingNotification = () => {
  const [animals, setAnimals] = useState<IAnimal[]>(getFromLS("animals") || []);

  const [hungryAnimals, setHungryAnimals] = useState<IAnimal[]>([]);

  const [showFeed, setShowFeed] = useState(false);

  useEffect(() => {
    checkHunger();
  }, []);

  setInterval(() => {
    checkHunger();
  }, 5000);

  function checkHunger() {
    const filteredAnimals = animals.filter((animal) => {
      const lastFeeding = DateTime.fromISO(animal.lastFed);

      const currentTime = DateTime.now();
      const interval = Interval.fromDateTimes(lastFeeding, currentTime);
      return interval.length("hours") > 3;
    });
    setHungryAnimals(filteredAnimals);
  }

  function toggleFeed() {
    setShowFeed(!showFeed);
  }

  if (!showFeed) {
    return (
      <div className="notification__container--outer">
        <button onClick={toggleFeed}>Visa feed ➡️</button>
      </div>
    );
  } else {
    if (hungryAnimals.length > 0) {
      return (
        <div className="notification__container--outer">
          <button onClick={toggleFeed}>⬅️ Stäng Feed</button>
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
    } else {
      return (
        <div className="notification__container--outer">
          <h2 className="notification__fed--message">
            Alla djur är mätta och belåtna!
          </h2>
        </div>
      );
    }
  }
};
