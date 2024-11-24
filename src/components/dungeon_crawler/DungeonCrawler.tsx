
import './DungeonCrawler.css'; // Import the CSS file
import MenuPaneDungeonCrawler from "./menuPaneDungeonCrawler";
import LevelGeneration from './LevelGeneration';
import LightingSlide from './LightingSlide';

const DungeonCrawler = () => {
  
  
    return (
      <div id="Dungeon Crawler">
        <div className="pane-menu">
          {MenuPaneDungeonCrawler()}
        </div>

        <div className="content-container">
          {LightingSlide()}
          {LevelGeneration()}
          </div>
          </div>
          
    );
    
};

export default DungeonCrawler;
