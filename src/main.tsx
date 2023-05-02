import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { ErrorElement } from "./pages/ErrorElement";
import { Animals } from "./pages/Animals/Animals";
import { SpecificAnimal } from "./pages/SpecificAnimal";
import { NavBar } from "./components/NavBar/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/animals",
    element: <Animals></Animals>,
    errorElement: <ErrorElement></ErrorElement>,
  },
  {
    path: "/animals/:id",
    element: <SpecificAnimal></SpecificAnimal>,
    errorElement: <ErrorElement></ErrorElement>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
