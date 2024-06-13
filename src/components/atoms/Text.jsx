import styled from "styled-components";

const TextStyled= styled.h1 `
    font-size: 4em;
    font-family: "Tiny5", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #ffffff;
`;
const Div=styled.div `
   display: flex;
flex-wrap: nowrap;
flex-direction: row;
width: 100%;
height: 20vh;
justify-content: center;
align-items: center;

`;
const Img= styled.img `
  width  : 5%;
  height: 30%;

`;
function Text({text, src,children}) {
    return ( <>
    <Div>
    <TextStyled>{text}</TextStyled>
    <Img src={src} alt="" />
    {children}
    </Div>
    
    </> );
}

export default Text;