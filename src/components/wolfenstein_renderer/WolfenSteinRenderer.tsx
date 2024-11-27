
import './WolfenSteinRenderer.css'; // Import the CSS file
import MenuPaneRecipeApp from './MenuPaneWolfenstein';
import Introduction from './Introduction';
import ThreeD from './ThreeD';
import Twodraycasting from './twodraycasting';


interface DungeonProps{
  setCurrentPage: (page: string) => void;
}

const WolfenSteinRenderer = ({setCurrentPage}: DungeonProps) => {
  
  
    return (
      <div id="Wolfenstein" className = "Wolfenstein">
        <div className="pane-menu">
          {<MenuPaneRecipeApp setCurrentPage={setCurrentPage}/>}
        </div>

        <div className="content-container">
          {Introduction()}
          {Twodraycasting()}
          {ThreeD()}
          </div>
          </div>
          
    );
    
};

export default WolfenSteinRenderer;
