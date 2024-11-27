import SlideTemplate from "../dungeon_crawler/SlideTemplate";
import './RecipeApp.css'


const Recipes = () => {
    const slides = [
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/create recipe.png`, description: 'Ability to add recipes'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/recipeadded.png`, description: 'Recipe added, can be removed with the x button'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/thumbnail.png`, description: 'Recipes can have thumbnails for visual design'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/multiplerecipes.png`, description: 'Multiple recipes can be added and stored in memory with JSON'},
      ];


  const codeString = `
// App shows split between recipe and ingredients page
function App() {
  const [activeList, setActiveList] = useState<"recipes" | "ingredients">(
    "recipes"
  );
  const [selectedRecipe, setSelectedRecipe] = useState<string | undefined>(
    undefined
  );
  const recipesList = useList("recipes");

  const handleRecipeSelect = (recipe: string) => {
    console.log(recipe);
    setSelectedRecipe(recipe);
    setActiveList("ingredients");
  };


  const recipePageRender = recipesList.renderPage(handleRecipeSelect);

  const RenderPage = () => {
    return (
      <>
      {activeList === "recipes" && recipePageRender}
      {activeList === "ingredients" && (
        <IngedientsPage
        selectedRecipe = {selectedRecipe}
        setActiveList = {setActiveList}
        setSelectedRecipe = {setSelectedRecipe}
        />
      )}
      </>
    )
  }

  return (
      <div>
        <div className="centered-container">
          {RenderPage()}
        </div>
    </div>
  );
}

export default App;

/////////////////////////////////////////
// Adding and removing recipes

// Store the updated lists in localStorage
  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(lists));
  }, [lists, storageKey]);

  // Automatically hide the alert after 3 seconds
  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => {
        setAlertVisibility(false); // Hide the alert
      }, 3000);
      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [alertVisible]);

  const clearLocalStorage = () => {
    localStorage.removeItem(storageKey);
    setList([]);
  };

  const handleRemoveItem = (item: string) => {
    // Find the index of the item in the currentList
    const index = currentList.indexOf(item);
    if (index !== -1) {
      // Remove the corresponding item from the raw list
      setList((prevList) => prevList.filter((_, i) => i !== index));
    }
  };

  const handleAddItem = (item: string) => {
    if (item.trim() === "") {
      return;
    }
    setList((prevList) => [...prevList, item.trim()]);
  };

  const listsClearedAlertRender = () => {
    return (
      alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>List Cleared</Alert>
      )
    );
  };
`;




const description = (
    <div className="text">
      <p className="description">
        Recipes can be created and are stored in JSON. They have internal memory of ingredients and pictures of the recipe
      </p>
      <ul className="features">
        <li>Recipes have a name and a thumbnail</li>
        <li>Internal memory of ingredients and images</li>
        <li>Recipes can be removed one by one or all at once</li>
      </ul>
    </div>
  );
  
  


  return (

    <SlideTemplate
    id = "recipes" 
      headline="RECIPES"
      description={description}
      codeString={codeString}
      language = "typescript"
      slides={slides}
    />
  );
};

export default Recipes;
