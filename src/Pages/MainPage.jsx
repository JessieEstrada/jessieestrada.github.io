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
          resumeLink="https://docs.google.com/document/d/1dfPfVW7S_IWGmed_gEMelEAtL_J0_k6LeHvIImODBu0/edit?usp=sharing"
        />
      </div>
    </>
  );
};
export default MainPage;
