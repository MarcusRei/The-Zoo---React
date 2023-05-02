import { useState } from "react";
import "./App.css";
import { getAnimals } from "./services/getAnimals";

function App() {
  getAnimals();
  return <div className="App"></div>;
}

export default App;
