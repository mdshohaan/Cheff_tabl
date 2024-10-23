import { useState } from "react";
import Banner from "./assets/Components/Banner";
import Header from "./assets/Components/Header";
import OurRecipes from "./assets/Components/OurRecipes";
import Recipes from "./assets/Components/Recipes";
import Sidebar from "./assets/Components/Sidebar";

const App = () => {
  const [recipeQueue, setRecipeQueue] = useState([]);
  const [preparedRecipe, setPreparedRecipe] = useState([]);
  const [totalTime,setTotalTime] = useState(0)
  const [totalCalories,setTotalCalories] = useState(0)

  
  const addRecipeToQueue = (recipe) => {
    const isExist = recipeQueue.find(
      (previousRecipe) => previousRecipe.recipe_id === recipe.recipe_id
    );

    if (!isExist) {
      setRecipeQueue([...recipeQueue, recipe]);
    } else {
      alert("Recipe Already Exist in the Queue");
    }
  };
  const handleRemove = (id) => {
    // find which recipe to remove
    const deletedRecipe = recipeQueue.find((recipe) => recipe.recipe_id === id);

    // remove from want to cook table
    const updatedQueue = recipeQueue.filter(
      (recipe) => recipe.recipe_id !== id
    );
    setRecipeQueue(updatedQueue);
    setPreparedRecipe([...preparedRecipe, deletedRecipe]);
  };
  
  const calculateTimeAndCalories = (time,calories) =>{
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }
  return (
    <div className="container mx-auto px-4">
      <Header></Header>
      <Banner></Banner>
      <OurRecipes></OurRecipes>
      {/* recipe card section */}
      <section className="flex flex-col md:flex-row gap-6">
        {/* Card Section */}
        <Recipes addRecipeToQueue={addRecipeToQueue}></Recipes>
        {/* Sidebar */}
        <Sidebar
          handleRemove={handleRemove}
          recipeQueue={recipeQueue}
          preparedRecipe={preparedRecipe}
          calculateTimeAndCalories ={calculateTimeAndCalories}
          totalTime ={totalTime}
          totalCalories={totalCalories}
        ></Sidebar>
      </section>
    </div>
  );
};

export default App;
