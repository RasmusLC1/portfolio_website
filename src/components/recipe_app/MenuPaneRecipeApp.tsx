
interface MenuProps {
  setCurrentPage: (page: string) => void;
}

const MenuPaneRecipeApp = ({ setCurrentPage }: MenuProps) => {
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
            <a href="#recipes">Recipes</a>
          </li>
          <li>
            <a href="#ingredients">Ingredients</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuPaneRecipeApp;
