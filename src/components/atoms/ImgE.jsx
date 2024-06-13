import styled from "styled-components";

const Img=styled.img`
    width :100% ;
    height: 100%;
    
`;
function ImgE({src}) {
    return ( <>
        <Img src={src}></Img>

    </> );
}

export default ImgE;