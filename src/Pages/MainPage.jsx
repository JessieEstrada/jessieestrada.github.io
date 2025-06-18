import { useEffect } from "react";
import IntroSection from "../components/IntroSection";
import "./MainPage.css";
const MainPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="main-page">
        <IntroSection title={"Software Engineer | Data & API Specialist"} />
      </div>
    </>
  );
};
export default MainPage;
