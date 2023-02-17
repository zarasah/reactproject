import './Main.css'
import Data from '../data/data.json';
import Item from './Item';

// console.log('Data', Data);
// console.log(typeof Data);
const data = Object.values(Data);

console.log(data);

export default function Main() {
    return (
        <div className = "items">
            {data.map((data) => {
                return <Item key = {data.id} data = {data}/>
            })}
        </div>
    )
}