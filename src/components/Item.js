import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Item(props) {
    const { name, price, img, id } = props.data;
    const [isActive, setActive] = useState(false);

    function handleMouseOver() {
        setActive(true);
    }

    function handleMouseOut() {
        setActive(false);
    }

    return (
        <div className = "item" onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut} onClick = {() => {props.onHistory(props.data)}}>
            <div>
                <Link to = {`${id}`}><img src = {img} alt = {name} className = "item-img"/></Link>
            </div>
            <div className = "discrip">
                <h4>{name}</h4>
                <p>$ {price} USD</p>
                <input type = "submit" value = "ADD TO CART" className = {isActive ? 'add-btn-active' : 'add-btn'} onClick = {() => {props.onAdd(props.data)}}/>
            </div>
        </div>
    )
}

