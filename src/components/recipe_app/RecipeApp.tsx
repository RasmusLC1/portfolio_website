
import './RecipeApp.css'; // Import the CSS file
import MenuPaneRecipeApp from './MenuPaneRecipeApp';
import Introduction from './Introduction';
import Admin from './Admin';
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
          {Admin()}
          {Ingredients()}
          </div>
          </div>
          
    );
    
};

export default RecipeApp;
