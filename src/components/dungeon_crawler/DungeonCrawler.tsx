
import './DungeonCrawler.css'; // Import the CSS file
import MenuPaneDungeonCrawler from "./menuPaneDungeonCrawler";
import LevelGeneration from './LevelGeneration';
import LightingSlide from './LightingSlide';
import InventorySystem from './InventorySystem';
import Weapons from './Weapons';

const DungeonCrawler = () => {
  
  
    return (
      <div id="Dungeon Crawler">
        <div className="pane-menu">
          {MenuPaneDungeonCrawler()}
        </div>

        <div className="content-container">
          {LevelGeneration()}
          {LightingSlide()}
          {InventorySystem()}
          {Weapons()}
          </div>
          </div>
          
    );
    
};

export default DungeonCrawler;
