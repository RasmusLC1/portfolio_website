import SlideTemplate from "../dungeon_crawler/SlideTemplate";
import './RecipeApp.css'


const Ingredients = () => {
    const slides = [
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/recipeopen.png`, description: 'Recipes start with no content'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/addingredients.png`, description: 'Ingredients can be added to the recipe'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/changeportionsize.png`, description: 'You can adjust the portion size which automatically updates the ingredients'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/addimage.png`, description: 'Images can be added to a local server'},
        {image: `${import.meta.env.BASE_URL}/pictures/recipeapp/imageadded.png`, description: 'Instantly update the background image when the image is uploaded'},
      ];


      const codeString = `
      // Image upload handling
      const fileSelectedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
          setSelectedFile(file);
          console.log(file); // Log file for debugging
        }
      };
    
      const fileUploadHandler = () => {
        if (selectedFile) {
          const formData = new FormData();
          formData.append("file", selectedFile, \`\${selectedRecipe}.jpg\`);
          axios
            .post("http://localhost:5000/upload", formData)
            .then((response) => {
              console.log(response);
              setImageUrl(
                \`\${selectedRecipe}.jpg?timestamp=\${new Date().getTime()}\`
              );
            })
            .catch((error) => console.error(error));
        }
      };
    
      const fileInput = () => (
        <div className="fileInput">
          <input type="file" onChange={fileSelectedHandler} />
          <Button
            color="success"
            children="Upload Image"
            onClick={fileUploadHandler}
          ></Button>
        </div>
      );
    
      /////////////////////////////////////////////////////////
      // Reusable components
      const renderDropDownButton = () => {
        return (
          <DropDownButton
            color="secondary"
            children={\`Portion Size: \${portion}\`}
            onClick={(selectedPortion) => setPortion(selectedPortion)}
          />
        );
      };
    
      const recipeImage = () => {
        return (
          <div>
            <Image className="img-fluid recipe-image" path={imageUrl} />
          </div>
        );
      };
    
      return (
        <>
          {fileInput()}
          {recipeImage()}
          {renderDropDownButton()}
          {renderReturnToRecipeButton()}
          {ingredientsList.renderPage()}
        </>
      );
      `;

      const description = (
        <div className="text">
          <p className="description">
          This component manages ingredients and recipe images dynamically. Ingredients are stored in JSON format and adjusted based on portion sizes selected by the user.
          </p>
          <ul className="features">
          <li>Upload and display recipe images</li>
          <li>Adjust ingredient quantities based on portion size</li>
          <li>Reusable components like dropdowns and buttons</li>
          </ul>
        </div>
      );
  


  return (

    <SlideTemplate
    id = "ingredients" 
      headline="INGREDIENTS"
      description={description}
      codeString={codeString}
      language = "typescript"
      slides={slides}
    />
  );
};

export default Ingredients;
