import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlık ve 3 arama kutusunu taşıyan kutu */
  background: #00adb5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
  padding: 3rem 0;
  
`;

export const MainHeader = styled.h2`
  /* food app başlık */
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2.5rem;
  font-family: "Girassol", sans-serif;

`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandığı kutu */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid #fff;
  border-radius: 2px;
  margin: 1rem; 
`;

export const FoodInput = styled.input`
  /* arama yapılacak ürünün yazıldığı input */
  height: 3rem;
  width: 15rem;
  font-size: 1.5rem;
  border: none;
  outline: none;
  text-indent: 0.5rem;
  margin: 5px;

`;

export const Button = styled.button`
  /* search butonu */
  background-color: #e1f1dd;
  height: 3rem;
  border: none;
  outline: none;  
  margin: 5px;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    background-color: #00adb5;
    transition: all 0.3s ease-in;
    border: 1px solid white;
  }
 
`;

export const Select = styled.select`
  /* breakfast yazan select */
  margin: 5px;
  padding: 0 10px;
  height: 3rem;
  border: none;
  outline: none;
  font-size: 1.5rem;

`;
