import './Basket.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

export default function Basket() {
    return (
        <div className = "basket">
            <FontAwesomeIcon icon={faBagShopping} className = "basket-icon"/>
        </div>
    )
}