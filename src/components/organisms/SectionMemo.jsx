import { useState, useEffect } from 'react';
import Cards from '../molecules/Cards';
import objs from '../../data/Objs';
import './SectionMemo.css';
import Image from '../atoms/Imgs';
import { Howl } from 'howler';
import Swal from 'sweetalert2';
import Text from '../atoms/Text';
import Button from '../atoms/Button';

const targets = objs.imgs;

function SectionMemo() {
    const [cards, setCards] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const sound = new Howl({
        src: ['./sound.mp3']
    });
    const gameOver = new Howl({
        src: ['./gameover.mp3']
    });

    useEffect(() => {
        const initialCards = [...targets, ...targets];
        shuffleCards(initialCards);
        setCards(initialCards);
    }, []);

    const handleCardClick = (index) => {
        if (flippedCards.length === 2 || matchedCards.includes(index)) return;

        const newFlippedCards = [...flippedCards, index];
        setFlippedCards(newFlippedCards);

        if (newFlippedCards.length === 2) {
            setMoves(prevMoves => prevMoves + 1);

            if (cards[newFlippedCards[0]].img === cards[newFlippedCards[1]].img) {
                setMatchedCards([...matchedCards, ...newFlippedCards]);
                setFlippedCards([]);
                sound.play();
            } else {
                setTimeout(() => {
                    setFlippedCards([]);
                }, 1000);
            }
        }
    };

    useEffect(() => {
        if (matchedCards.length === targets.length * 2) {
            Swal.fire({
                title: "Has ganado",
                text: "Movimientos:" +moves,
                icon: "success"
              });
            gameOver.play();
        }
    }, [matchedCards]);

    const shuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    };

    const resetGame = () => {
        const shuffledCards = [...cards];
        shuffleCards(shuffledCards);
        setCards(shuffledCards);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    };

    return (<>
        <Text text={"Movimientos: "+ moves} src={"hongo.png"}>
                <Button onClick={resetGame} text={"Reiniciar"}></Button>
            </Text>
        <section id="memo_section">
            
            {cards.map((item, index) => (
                <Cards
                    key={index}
                    src={item.img}
                    status={flippedCards.includes(index) || matchedCards.includes(index)}
                    onClick={() => handleCardClick(index)}
                    frontContent={<Image src="who.png" alt="backside" />}
                />
            ))}
        </section>
        </>
    );
}

export default SectionMemo;
