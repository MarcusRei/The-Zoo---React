import { NavBar } from "../../components/NavBar/NavBar";
import { getAnimals } from "../../services/getAnimals";
import "./Home.css";
export const Home = () => {
  getAnimals();
  return (
    <div className="home">
      <NavBar></NavBar>
      <h2 className="welcome-message">Välkommen till Mackes Zoo!</h2>
      <p>Här har vi en härlig blandning av små krabater som man kan mata</p>
      <img src="/assets/zoo.png" alt="Illustartion of a Lion" />
    </div>
  );
};
