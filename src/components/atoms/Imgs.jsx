import styled from "styled-components";

const Img= styled.img `
    width: 100%;
    height: 100%;
`;

function Image(props) {
    return ( <>
    <Img src={props.src} alt={props.src}></Img>
    
    </> );
}

export default Image;
