import React, { useEffect } from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";
import mealSvg from "../../assets/meal.svg";
import { useNavigate } from "react-router-dom";


const Login = ({ setShowNav, showNav }) => {
  const navigate = useNavigate();


  // useEffect(() => {
  //   window.onload = setShowNav(!showNav);
  // }, []);

  const user = {
    username: "user",
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sessionStorage.setItem("user", JSON.stringify(user));

   navigate("/home");
    // veri göndermeyeceksek bu şekilde sayfaya yönlendirebiliriz. netlify da sorun olabiliyor  navigate dene
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>{"<Mehmet/>"}Recipe</Header>
        {/* login sayfasındaki yuvarlak olayın içindeki yazı (Header) */}

        <StyledForm onSubmit={handleSubmit}>
          {/* 3 kutunun olduğu form  */}
          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
