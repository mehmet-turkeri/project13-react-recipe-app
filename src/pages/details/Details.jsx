import React from "react";
import { useLocation } from "react-router-dom";
import {
  DetailPart,
  ImgContainer,
  HeaderContainer,
  DetailText,
  DetailContainer,
} from "./DetailsStyles";
import diet from "../../assets/diet.svg";

const Details = (props) => {
  const location = useLocation();
  const recipe = location.state.recipe;

  return (
    <div>
      <DetailContainer>
        <HeaderContainer>
          <h1>{recipe.label}</h1>
          <img style={{ width: "150px" }} src={diet} alt="dietphoto" />
        </HeaderContainer>

        <DetailPart>
          <DetailText>
            <h6>Nutrients</h6>

            <p>
              {recipe.totalNutrients.CA.label}:
              {Math.round(recipe.totalNutrients.CA.quantity)}
              {recipe.totalNutrients.CA.unit}
            </p>

            <p>
              {recipe.totalNutrients.CHOCDF.label}:
              {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
              {recipe.totalNutrients.CHOCDF.unit}
            </p>

            <p>
              {recipe.totalNutrients.CHOLE.label}:
              {Math.round(recipe.totalNutrients.CHOLE.quantity)}
              {recipe.totalNutrients.CHOLE.unit}
            </p>

            <p>
              {recipe.totalNutrients.ENERC_KCAL.label}:
              {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
              {recipe.totalNutrients.ENERC_KCAL.unit}
            </p>

            <p> {recipe.totalWeight} </p>

            <p>Calories:{Math.round(recipe.calories)}</p>

            <p>
              {recipe.totalNutrients.FAT.label}:
              {Math.round(recipe.totalNutrients.FAT.quantity)}
            </p>

            <p>
              {recipe.totalNutrients.PROCNT.label}:
              {Math.round(recipe.totalNutrients.PROCNT.quantity)}
            </p>

            <p>
              {recipe.totalNutrients.CHOLE.label}:
              {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            </p>
          </DetailText>
          <ImgContainer>
            <img src={recipe.image} alt={recipe.label} />
          </ImgContainer>
          <DetailText>
            <h6 style={{ textAlign: "left" }}>Ingradients</h6>
            <ol>
              {recipe.ingredientLines.map((line, index) => (
                <div key={index}>
                  <li>{line}</li>
                </div>
              ))}
            </ol>
          </DetailText>
        </DetailPart>
      </DetailContainer>
    </div>
  );
};

export default Details;