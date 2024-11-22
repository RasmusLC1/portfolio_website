// BurgerMenu.tsx
import React, { useState } from 'react';
import './BurgerMenu.css'; // We'll create this CSS file for styling

interface BurgerMenuProps {
  setCurrentPage: (page: string) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (page: string) => {
    setCurrentPage(page);
    setIsOpen(false); // Close the menu after selecting a page
  };

  return (
    <div className="burger-menu">
      <div className="burger-icon" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isOpen}>
        {/* Burger icon lines */}
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
        <div className={`line ${isOpen ? 'open' : ''}`}></div>
      </div>
      {isOpen && (
        <div className="menu-items">
          <ul>
            <li onClick={() => handleMenuClick('frontPage')}>Front Page</li>
            <li onClick={() => handleMenuClick('profile')}>Profile</li>
            <li onClick={() => handleMenuClick('resume')}>Resume</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
