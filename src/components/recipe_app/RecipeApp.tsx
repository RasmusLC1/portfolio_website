
import './RecipeApp.css'; // Import the CSS file
import MenuPaneRecipeApp from './MenuPaneRecipeApp';
import Introduction from './Introduction';
import Recipes from './Recipes';

interface DungeonProps{
  setCurrentPage: (page: string) => void;
}

const RecipeApp = ({setCurrentPage}: DungeonProps) => {
  
  
    return (
      <div id="Recipe App">
        <div className="pane-menu">
          {<MenuPaneRecipeApp setCurrentPage={setCurrentPage}/>}
        </div>

        <div className="content-container">
          {Introduction()}
          {Recipes()}
          </div>
          </div>
          
    );
    
};

export default RecipeApp;
