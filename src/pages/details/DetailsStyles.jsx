import styled from "styled-components";

export const DetailContainer = styled.div`
  /* en dış container */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  background: #00adb5;
  min-height: calc(100vh - 75px);
  /* height: fit-content; */
  padding: 5px;
`;

export const DetailPart = styled.div`
  /* verilerin , içindekiler,resim ve Nutrients in yazdığı yer */
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  margin: 1rem;
  border: 1px solid white;
  border-radius: 5px;
  background-color: #e1f1dd; 
 
`;

export const ImgContainer = styled.div` 
  /* resmin div i */
  border: 1px solid #00adb5;
  padding: 10px;
  border-radius: 3px;
  margin: 2rem;
  img {
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const HeaderContainer = styled.div`
  /* üstteki başlık ve kadın resmi */
  display: flex;
  justify-content: space-evenly;
  margin: 25px;
  font-size: 3rem;
  h1 {
    font-size: 3rem;
  }
  img {
    width: 200px;
  }
`;

export const DetailText = styled.div` // detailin Nutrients ve Ingradeients bilgileri
  width: 400px;
  text-align: right;
  font-size: 1.2rem;
  margin: 1.5rem;
  h6 {
    color: blue;
    font-family: "Girassol", sans-serif;
    font-size: 1.5rem;
  }
  p {
    font-weight: 700;
  }
  li {
    font-weight: 700;
    line-height: 2;
    text-align: left;
  }
`;
