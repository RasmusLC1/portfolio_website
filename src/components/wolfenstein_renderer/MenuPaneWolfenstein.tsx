
interface MenuProps {
  setCurrentPage: (page: string) => void;
}

const MenuPaneWolfenstein = ({ setCurrentPage }: MenuProps) => {
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
            <a href="#2d">2D Perspective</a>
          </li>
          <li>
            <a href="#3d">3D Perspective</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPaneWolfenstein;
