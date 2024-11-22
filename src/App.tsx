import React from "react";
import profilePane from "./components/profilePane";
import resumePane from "./components/resumePane";
import "./App.css";

function App() {
  const stationaryPane = () => {
    return profilePane();
  };

  const scrollablePane = () => {
    return resumePane();
  };

  const splitPane = () => {
    return (
      <div className="split-container">
        {stationaryPane()}
        {scrollablePane()}
      </div>
    );
  };

  return <div>{splitPane()}</div>;
}

export default App;
