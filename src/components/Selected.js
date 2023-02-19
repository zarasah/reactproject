import { useParams } from "react-router-dom";
import './Selected.css';
import Data from '../data/data.json';

const data = Object.values(Data);

export default function Selected() {
    const id = +useParams().id;
   
    const selectedData = data.filter((item) => {
        return item.id === id;
    })[0]

    const { name, price, img, description } = selectedData;

    return (
        <div className = "selected">
            <div className="selected-left">
                <img alt = {name} src = {img}/>
            </div>
            <div className = "selected-right">
                <h2>{name}</h2>
                <h5>Price $ {price} USA</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}