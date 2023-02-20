import { useState } from "react";

export default function Item(props) {
    const { name, price, img, id } = props.data;
    const [isActive, setActive] = useState(false);

    function handleMouseOver() {
        setActive(true);
    }

    function handleMouseOut() {
        setActive(false);
    }

    function click() {
        
    }

    return (
        <div className = "item" onMouseOver={handleMouseOver} onMouseOut = {handleMouseOut}>
            <div>
                <a href = {id}><img src = {img} alt = {name} className = "item-img"/></a>
            </div>
            <div className = "discrip">
                <h4>{name}</h4>
                <p>$ {price} USD</p>
                <input type = "submit" value = "ADD TO CART" className = {isActive ? 'add-btn-active' : 'add-btn'} onClick = {click}/>
            </div>
        </div>
    )
}

