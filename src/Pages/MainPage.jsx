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
          title={"Software Engineer | Data & IT Specialist"}
          resumeLink="https://docs.google.com/document/d/1X11rbSsFCslbf3CEjGrFusz5lIq7d-MYihjv4MFjO7Y/edit?usp=sharing"
        />
      </div>
    </>
  );
};
export default MainPage;
