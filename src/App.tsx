import React, { useState } from "react";
import ProfilePane from "./components/profilePane";
import ResumePane from "./components/resume/ResumePane";
import menuPane from "./components/MenuPane";
import BurgerMenu from "./components/buttons/BurgerMenu";
import DungeonCrawler from './components/dungeon_crawler/DungeonCrawler';
import PolynomialMultiplication from './components/polynomial_multiplication/PolynomialMultiplication';
import WolfenSteinRenderer from './components/wolfenstein_renderer/WolfenSteinRenderer';
import RecipeApp from './components/recipe_app/RecipeApp';
import "./App.css";
import "./components/links/links.css";


function App() {
  const [currentPage, setCurrentPage] = useState("Dungeon Crawler");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const frontPage = () => {
    return (
      <div className={`content-container ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="pane-menu">
          {menuPane()}
        </div>
        <div className="main-content">
          <div className="split-container">
            <div className="pane pane-stationary">
                <ProfilePane setCurrentPage = {setCurrentPage}/>
            </div>
            <div className="pane pane-scrollable">
              <ResumePane setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const getCurrentPage = () => {
    switch (currentPage) {
      case 'frontPage':
        return frontPage();
      case 'Dungeon Crawler':
        return DungeonCrawler();
      case 'Polynomial Multiplication':
        return <PolynomialMultiplication />;
      case 'Recipe Web App':
        return <RecipeApp />;
      case 'Wolfenstein Renderer':
        return <WolfenSteinRenderer />;
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
