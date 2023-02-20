import './Main.css'
import Data from '../data/data.json';
import Item from './Item';

const data = Object.values(Data);

export default function Main(props) {
    return (
        <div className = "items">
            {data.map((data) => {
                return <Item key = {data.id} data = {data} onAdd = {props.onAdd}/>
            })}
        </div>
    )
}