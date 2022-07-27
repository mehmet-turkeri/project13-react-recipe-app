import React from "react";
import { FormContainer, FoodInput, Select, Button } from "./HeaderStyles";

const Form = ({ mealTypes, setQuery, setMeal, query, meal, getApi }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    query ? getApi(query, meal) : alert("Please enter a search query");
  };

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleChange2 = (e) => {
    setMeal(e.target.value);
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FoodInput type="text" placeholder="Search" onChange={handleChange} />
      <Button type="submit">Search</Button>
      <Select name="mealTypes" id="mealTypes" onChange={handleChange2}>
        {mealTypes.map((item, index) => (
          <option key={index} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;