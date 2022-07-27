import React from "react";
import { useNavigate } from "react-router-dom";
import {Button, RecipeCardd, RecipeImage, RecipeHeader} from "./HomeStyles";

const RecipeCard = ({ recipe }) => {
  let navigate = useNavigate();

  const handleMore = () => {
    navigate("/details", { state: { recipe } });//*
  };
  return (
    <RecipeCardd>
      <RecipeHeader> {recipe?.label} </RecipeHeader>
      <RecipeImage src={recipe?.image} />
      <Button onClick={handleMore}>View More</Button>
    </RecipeCardd>
  );
};

export default RecipeCard;