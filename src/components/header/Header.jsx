import React from "react";
import Form from "./Form";
import { HeaderContainer, MainHeader } from "./HeaderStyles";

const Header = ({ setQuery, query, meal, setMeal, getApi, mealTypes }) => {
  return (
    <HeaderContainer>
      <MainHeader>Food App</MainHeader>
      <Form
        setQuery={setQuery}
        query={query}
        mealTypes={mealTypes}
        setMeal={setMeal}
        meal={meal}
        getApi={getApi}
      />
    </HeaderContainer>
  );
};

export default Header;
