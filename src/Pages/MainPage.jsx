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
        <IntroSection
          title={"Software Engineer | Data & API Specialist"}
          resumeLink="https://docs.google.com/document/d/1RKx5oyX2uIYIMzN6CcOdRUOi5ZSn37auO2WwIxOYT3I/edit?usp=sharing"
        />
      </div>
    </>
  );
};
export default MainPage;
