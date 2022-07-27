import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

`;

export const RecipeCardd = styled.div`
  /* search den sonra çıkan herbir yiyecek kart */
  background: #e1f1dd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 300px;
  background-color: #e1f1dd;
  padding: 7px;
  margin: 10px;
  border-radius: 2px;
  &:hover {
    box-shadow: 5px 5px 5px black;
    transition: all 0.5s ease-in;
  }
  
`;

export const RecipeImage = styled.img`
  /* kartların içindeki resimler */
  height: 150px;
  border-radius: 10px;
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #00adb5;
  height: 30px;
  border: none;
  border-radius: 2px;
  margin: 10px;
  padding: 5px;
  color: #fff;
  cursor: pointer;

`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.5rem;
  text-align: center;
`;

export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  background-color: #00adb5;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki ascinin resmi */
  width: 30%;
  max-width: 750px;
`;
