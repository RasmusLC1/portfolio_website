// BurgerMenu.tsx
import React from 'react';
import './BurgerMenu.css';

interface BurgerMenuProps {
  setCurrentPage: (page: string) => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ setCurrentPage, isMenuOpen, setIsMenuOpen }) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false); // Close the menu after selecting a page
  };

  return (
    <div className="burger-menu">
      <div
        className="burger-icon"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        {/* Burger icon lines */}
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
      </div>
      {isMenuOpen && (
        <div className="menu-items">
          <ul>
            <li onClick={() => handleMenuClick('frontPage')}>Front Page</li>
            <li onClick={() => handleMenuClick('Dungeon Crawler')}>Dungeon Crawler</li>
            <li onClick={() => handleMenuClick('Polynomial Multiplication')}>Polynomial Multiplication</li>
            <li onClick={() => handleMenuClick('Recipe App')}>Recipe App</li>
            <li onClick={() => handleMenuClick('Wolfenstein Renderer')}>Wolfenstein Renderer</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
