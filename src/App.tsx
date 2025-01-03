import { useState } from "react";
import ProfilePane from "./components/profilePane";
import ResumePane from "./components/resume/ResumePane";
import MenuPane from "./components/MenuPane";
import BurgerMenu from "./components/buttons/BurgerMenu";
import DungeonCrawler from "./components/dungeon_crawler/DungeonCrawler";
import PolynomialMultiplication from "./components/polynomial_multiplication/PolynomialMultiplication";
import WolfenSteinRenderer from "./components/wolfenstein_renderer/WolfenSteinRenderer";
import RecipeApp from "./components/recipe_app/RecipeApp";
import "./App.css";
import "./components/links/links.css";


function App() {
  const [currentPage, setCurrentPage] = useState("frontPage");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showEducation, setshowEducation] = useState(false);
  const [scrollRequested, setScrollRequested] = useState(false);

  const frontPage = () => {
    return (
      <div className={`content-container ${isMenuOpen ? "menu-open" : ""}`}>
        <div className="pane-menu">
          <MenuPane setshowEducation = {setshowEducation} setScrollRequested = {setScrollRequested}/>
        </div>
        <div className="main-content">
          <div className="split-container">
            <div className="pane pane-stationary">
              <ProfilePane  />
            </div>
            <div className="pane pane-scrollable">
              <ResumePane
                setCurrentPage={setCurrentPage}
                showEducation={showEducation}
                setshowEducation={setshowEducation}
                scrollRequested = {scrollRequested}
                setScrollRequested = {setScrollRequested}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getCurrentPage = () => {
    switch (currentPage) {
      case "frontPage":
        return frontPage();
      case "Dungeon Crawler":
        return <DungeonCrawler setCurrentPage={setCurrentPage}/>;
      case "Polynomial Multiplication":
        return <PolynomialMultiplication setCurrentPage={setCurrentPage}/>;
      case "Recipe Web App":
        return <RecipeApp setCurrentPage={setCurrentPage}/>;
      case "Wolfenstein Renderer":
        return <WolfenSteinRenderer setCurrentPage={setCurrentPage}/>;
      default:
        return frontPage();
    }
  };

  return (
    <div>
      <BurgerMenu
        setCurrentPage={setCurrentPage}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      {getCurrentPage()}
    </div>
  );
}

export default App;
