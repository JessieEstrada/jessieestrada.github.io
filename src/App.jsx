import React from "react";
import { useRoutes } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import Navbar from "./components/NavBar";

function App() {
  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <MainPage />,
    },
  ]);

  return (
    <div className="App">
      <Navbar />
      {element}
    </div>
  );
}

export default App;
