import styled from 'styled-components';


const Nav = styled.div`//En ustteki acik yesil, recipe ve about, Github ve logout iceren kutu - NAV -Bu bir kapsayici div style
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1.2rem;
background-color: #e1f1dd;
height: 10vh;
`;


export const Nava = styled.a` //sagdaki sadece github dıs url link style
text-decoration: none;
margin: 0 3rem;

`;

export const Logo = styled.h3`//soldaki ed8en/>recipe yazisi style - LOGO - Bir h3 baslik style
color: #393e46;
 

 i {
   font-family: "Girassol", sans-serif;
 }
 span {
   font-family: "Girassol", sans-serif;
   font-weight: 400;
   font-size: 2rem;
   color: #00adb5;
 }
`;


export default Nav;

