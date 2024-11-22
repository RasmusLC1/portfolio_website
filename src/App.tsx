import React from "react";
import Split from "react-split";
import profilePane from "./components/profilePane";
import "./App.css";

function App() {


  const stationaryPlane = () => {
    return (
      profilePane()
    );
  };

  const scrollablePlane = () => {
    return (
      <div className="pane pane-scrollable">
        <h1>Scrollable Pane</h1>
        <p>Add more content here to scroll.</p>
        {[...Array(30)].map((_, i) => (
          <p key={i}>Line {i + 1}</p>
        ))}
      </div>
    );
  };

  const splitPane = () => {
    return (
      <Split
        sizes={[40, 60]} // Each pane takes 50% of the width
        direction="horizontal" // Horizontal split (side-by-side layout)
        gutterSize={10} // Size of the gutter between panes
        className="split-container"
        >
        {stationaryPlane()}
        {scrollablePlane()}

      </Split>
    );
  };
  return <div>{splitPane()}</div>;
}

export default App;
