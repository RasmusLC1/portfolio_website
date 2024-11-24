import React from 'react';
import Carousel from '../Images/Carousel';
import './DungeonCrawler.css'; // Import the CSS file

const DungeonCrawler = () => {
  const slides = [
    `/pictures/game/spawn.png`,
    `/pictures/game/chest.png`,
    `/pictures/game/item_drop.png`,
    `/pictures/game/pickup.png`,
    `/pictures/game/equip.png`,
    `/pictures/game/attack.png`,
  ];
  
  return (
    <div className="dungeonCrawler">
      <div className="max-w-lg block"> {/* Apply the block class to animate */}
      <div className="section">
        <Carousel slides={slides} />
        TEST 1
      </div>
      <div className="section">
        <Carousel slides={slides} />
        TEST 2
      </div>
      <div className="section">
        <Carousel slides={slides} />
        TEST 3
      </div>
      <div className="section">
        <Carousel slides={slides} />
        TEST 4
      </div>
      <div className="section">
        <Carousel slides={slides} />
        TEST 5
      </div>
      <div className="section">
        <Carousel slides={slides} />
      </div>
      <div className="section">
        <Carousel slides={slides} />
      </div>
      </div>
    </div>
  );
};

export default DungeonCrawler;
