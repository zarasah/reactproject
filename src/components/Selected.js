// import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import './Selected.css';
import Data from '../data/data.json';

const data = Object.values(Data);

export default function Selected() {
    // const [data, setData] = useState({});
    const id = +useParams().id;

    // useEffect(() => {
    //     fetch(`http://localhost:3001/items/${id}`)
    //     .then(res => res.json())
    //     .then(data => setData(data))
    // }, [id])
   
    const selectedData = data.filter((item) => {
        return item.id === id;
    })[0]

    const { name, price, img, description } = selectedData;

    // const { name, price, img, description } = data;

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