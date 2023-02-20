import { Link } from 'react-router-dom';
import './Basket.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function Basket() {
    return (
        <div className = "basket">
            <Link to = "/basket"><FontAwesomeIcon icon={faBagShopping} className = "basket-icon"/></Link>
        </div>
    )
}