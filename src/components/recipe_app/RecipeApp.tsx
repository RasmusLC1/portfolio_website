
import './RecipeApp.css'; // Import the CSS file
import MenuPaneRecipeApp from './MenuPaneRecipeApp';
import Introduction from './Introduction';
import Recipes from './Recipes';
import Ingredients from './ingredients';

interface DungeonProps{
  setCurrentPage: (page: string) => void;
}

const RecipeApp = ({setCurrentPage}: DungeonProps) => {
  
  
    return (
      <div id="Recipe App" className = "recipeapp">
        <div className="pane-menu">
          {<MenuPaneRecipeApp setCurrentPage={setCurrentPage}/>}
        </div>

        <div className="content-container">
          {Introduction()}
          {Recipes()}
          {Ingredients()}
          </div>
          </div>
          
    );
    
};

export default RecipeApp;
