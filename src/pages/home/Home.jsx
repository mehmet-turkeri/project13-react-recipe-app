import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import HomeIcon from "../../assets/home.svg";
import axios from "axios";
import RecipeCard from "./RecipeCard";


const APP_ID = "7164b2bc"; 
const APP_KEY = "6752e657e8aba29be6a2f75c9a0fc48a";
/****buraya kendi id ve key imizi yaziyoruz**********/

const Home = ({ setShowNav, showNav }) => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState();//*

  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());

  // query=yazdığımız sorgu kelimesi, meal=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getApi = async () => {
    const { data } = await axios.get(url);
    console.log(data);
    setRecipes(data.hits);
  };



  return (
    <ImgDiv>
      {
        <Header
          query={query}
          setQuery={setQuery}
          meal={meal}
          setMeal={setMeal}
          getApi={getApi}
          mealTypes={mealTypes}
        />
      }

      {recipes ? (
        <MainContainer>
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe.recipe} />//*lıste.recıpe
          ))}
        </MainContainer>
      ) : (
        <HomeImg src={HomeIcon} />
      )}
    </ImgDiv>
  );
};

export default Home;
