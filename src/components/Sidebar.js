import { Link } from 'react-router-dom';
import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            <h4>Categories</h4>
                <ul>
                    <li><Link to = "/#">All products</Link></li>
                    <li><Link to = "/#">Accessories</Link></li>
                    <li><Link to = "/#">Clothes</Link></li>
                    <li><Link to = "/#">Perfume</Link></li>
                    <li><Link to = "/#">Shoes</Link></li>
                </ul>
        </div>
    );
}