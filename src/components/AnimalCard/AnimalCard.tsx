import { Link } from "react-router-dom";
import { IAnimal } from "../../models/IAnimal";
import "./AnimalCard.css";

interface IAnimalCardProps extends IAnimal {
  name: string;
  shortDescription: string;
  longDescription: string;
  yearOfBirth: number;
  latinName: string;
  imageUrl: string;
  isFed: boolean;
  lastFed: string;
}

export const AnimalCard = ({
  name,
  shortDescription,
  longDescription,
  yearOfBirth,
  latinName,
  imageUrl,
  isFed,
  lastFed,
}: IAnimalCardProps) => {
  function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement;
    target.onerror = null;
    target.src = "../../assets/placeholder_square.jpg";
  }

  const altText = "Bild på " + name;

  return (
    <>
      <img
        className="animal__img"
        src={imageUrl}
        alt={altText}
        onError={handleImageError}
      />
      <h2 className="animal__name">{name}</h2>
      <p className="animal__latinName">
        Latinskt namn: <strong>{latinName}</strong>
      </p>
      <p>
        Född: <strong>{yearOfBirth}</strong>
      </p>
      <p className="animal__desc">{shortDescription}</p>
      <p>Senast matad: {lastFed}</p>
    </>
  );
};
