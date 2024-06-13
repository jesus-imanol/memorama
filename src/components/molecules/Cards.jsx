import Card from '../atoms/Card';
import Image from '../atoms/Imgs';
import './Cards.css'

function Cards(props) {
    return (
        <Card onClick={props.onClick} status={props.status}>
            <div className="card-inner">
                <div className="card-front">
                    {props.frontContent}
                </div>
                <div className="card-back">
                    <Image src={props.src} alt="frontside" />
                </div>
            </div>
        </Card>
    );
}

export default Cards;
