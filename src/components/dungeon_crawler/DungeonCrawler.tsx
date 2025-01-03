
import './DungeonCrawler.css'; // Import the CSS file
import MenuPaneDungeonCrawler from './MenuPaneDungeonCrawler';
import LevelGeneration from './LevelGeneration';
import LightingSlide from './LightingSlide';
import InventorySystem from './InventorySystem';
import Weapons from './Weapons';
import Runes from './Runes';
import Enemies from './Enemies';
import Introduction from './Introduction';
import './DungeonCrawler.css'

interface DungeonProps{
  setCurrentPage: (page: string) => void;
}

const DungeonCrawler = ({setCurrentPage}: DungeonProps) => {
  
  
    return (
      <div id="Dungeon Crawler">
        <div className="pane-menu">
          {<MenuPaneDungeonCrawler setCurrentPage={setCurrentPage}/>}
        </div>

        <div className="content-container">
          {Introduction()}
          {LevelGeneration()}
          {Enemies()}
          {LightingSlide()}
          {InventorySystem()}
          {Weapons()}
          {Runes()}
          </div>
          </div>
          
    );
    
};

export default DungeonCrawler;
