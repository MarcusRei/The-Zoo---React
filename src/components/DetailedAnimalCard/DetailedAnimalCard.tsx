import { getFromLS } from "../../utils/LSFunctions";
import { IAnimal } from "../../models/IAnimal";
import "./DetailedAnimalCard.css";

export const DetailedAnimalCard = ({ ...animal }: IAnimal) => {
  function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "../../../public/assets/placeholder_square.jpg";
  }
  return (
    <div className="animal">
      <img
        className="animal__img"
        src={animal.imageUrl}
        alt=""
        onError={handleImageError}
      />
      <h2>Namn: {animal.name}</h2>
      <p>Latinskt artnamn: {animal.latinName}</p>
      <p>född: {animal.yearOfBirth}</p>
      <p>{animal.longDescription}</p>
      <p>
        Blev senast matad: <strong>{animal.lastFed}</strong>
      </p>
    </div>
  );
};
