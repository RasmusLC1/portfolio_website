
interface MenuProps {
  setCurrentPage: (page: string) => void;
}

const MenuPaneDungeonCrawler = ({ setCurrentPage }: MenuProps) => {
  return (
    <div className="pane pane-menu">
      
      <nav className="menu">
        <ul>
        <li>
            <a
            href="#"
            onClick={() => setCurrentPage("frontPage")}
            className="front-page-link"
          >
            Front Page
          </a>
          </li>
          <li>
            <a href="#introduction">Introduction</a>
          </li>
          <li>
            <a href="#levelgeneration">Level Generation</a>
          </li>
          <li>
            <a href="#enemies">Enemies</a>
          </li>
          <li>
            <a href="#lighting">Lighting</a>
          </li>
          <li>
            <a href="#inventory">Inventory</a>
          </li>
          <li>
            <a href="#weapons">Weapons</a>
          </li>
          <li>
            <a href="#runes">Runes</a>
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default MenuPaneDungeonCrawler;
