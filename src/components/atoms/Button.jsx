import styled from "styled-components";

const ButtonStyled = styled.button `
    background-color: #007AFF;
    border: none; 
    color: white;
    padding: 10px 20px;
    font-size: 16px; 
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    cursor: pointer; 
    transition: background-color 0.3s ease;

    &:hover {
    background-color: #005BBB;
    }
    &:active {
    background-color: #0041A3;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }
    &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.5);
    }
`;
function Button(props) {
    return ( <>
    <ButtonStyled onClick={props.onClick}>{props.text}</ButtonStyled>
    </> );
}

export default Button;