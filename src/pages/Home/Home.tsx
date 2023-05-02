import { NavBar } from "../../components/NavBar/NavBar";
import { getAnimals } from "../../services/getAnimals";
import "./Home.css";
export const Home = () => {
  getAnimals();
  return (
    <div className="home">
      <NavBar></NavBar>
      <h2 className="welcome-message">Welcome to the Zoo</h2>
    </div>
  );
};
