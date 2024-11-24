import React from 'react';
import Carousel from '../Images/Carousel';
import './DungeonCrawler.css'; // Import the CSS file
import CodeDisplay from '../codeDisplay/CodeDisplay';
import { code } from 'framer-motion/client';
import menuPane from '../MenuPane';
import LightingSlide from './LightingSlide';

const DungeonCrawler = () => {
  
  
    return (
      <div id="Dungeon Crawler">
        <div className="pane-menu">
          {menuPane()} {/* Menu component */}
        </div>

        <div className="content-container">
          {LightingSlide()}
          </div>
          </div>
          
    );
    
};

export default DungeonCrawler;
