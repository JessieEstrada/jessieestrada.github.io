import { useRoutes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/NavBar";
import DataAnalyst from "./pages/DataAnalyst.jsx";
import ITSpecialist from "./pages/ITSpecialist.jsx";
import MainPage from "./pages/MainPage";
import SoftwareEngineer from "./pages/SoftwareEngineer.jsx";
import SystemsAnalyst from "./pages/SystemsAnalyst.jsx";
function App() {
  let element = useRoutes([
    { path: "/", element: <MainPage /> },
    { path: "/software-engineer", element: <SoftwareEngineer /> },
    { path: "/it-support", element: <ITSpecialist /> },
    { path: "/data-analyst", element: <DataAnalyst /> },
    { path: "/systems-analyst", element: <SystemsAnalyst /> },
  ]);

  return (
    <div className="App">
      <Navbar />
      {element}
      <Footer /> {/* Footer appears on all pages */}
    </div>
  );
}

export default App;
