import styled from 'styled-components';

const Div = styled.div`
    width: 40vh;
    height: 30vh;
    background-color: #DF2F2F;
    border-radius: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 1000px;

    .card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        border-radius: 10%;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'none')};
    }

`;

function Card(props) {
    return (
        <Div onClick={props.onClick} flipped={props.status}>
            {props.children}
        </Div>
    );
}

export default Card;
