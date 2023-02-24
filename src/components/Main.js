import './Main.css'
import Data from '../data/data.json';
import Item from './Item';

const data = Object.values(Data);

export default function Main(props) {
    const items = data.filter((item) => {
        return item.name.toLowerCase().includes(props.filter.toLowerCase());
    })

    return (
        <div className = "items">
            {items.map((data) => {
                return <Item key = {data.id} data = {data} onAdd = {props.onAdd} onHistory = {props.onHistory}/>
            })}
        </div>
    )
}