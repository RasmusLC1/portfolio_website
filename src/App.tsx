import React, { useState } from "react";
import profilePane from "./components/profilePane";
import resumePane from "./components/resume/resumePane";
import menuPane from "./components/MenuPane";
import BurgerMenu from "./components/buttons/BurgerMenu";
import "./App.css";

function App() {

  const [currentPage, setCurrentPage] = useState("frontPage")

  const frontPage = () => {
    return (
      <div className="main-content">
        {menuPane()} 
      <div className="split-container">
        {profilePane()}
        {resumePane()}
      </div>
    </div>
    )
  }

  const getCurrentPage = () => {
    switch (currentPage){
      case "frontPage":
        return frontPage()
      default:
        return frontPage()
    }
  }
  

  const splitPane = () => {
    
    return (
      getCurrentPage()
    );
  };

  return <div>{splitPane()}</div>;
}

export default App;
