import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';

export default function Footer() {
    return (
        <div className = "footer">
            <div className = "footer-left">
                <h5>Pages</h5>
                <ul>
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/blog">Blog</a></li>
                    <li><a href = "/about">About</a></li>
                    <li><a href = "/contact">Contact</a></li>
                </ul>
            </div>
            <div className = "footer-center">
                <h5>Shop</h5>
                <ul>
                    <li><a href = "/#">All products</a></li>
                    <li><a href = "/#">Accessories</a></li>
                    <li><a href = "/#">Clothes</a></li>
                    <li><a href = "/#">Perfume</a></li>
                    <li><a href = "/#">Shoes</a></li>
                </ul>
            </div>
            <div className = "footer-right">
                <ul className = "brands">
                    <li><a href = "https://www.facebook.com" target = "_blank" rel='noreferrer'><FontAwesomeIcon icon={faFacebook} className = "icon"/></a></li>
                    <li><a href = "https://www.instagram.com/" target = "_blank" rel='noreferrer'><FontAwesomeIcon icon={faInstagram} className = "icon"/></a></li>
                    <li><a href = "https://twitter.com/?lang=ru" target = "_blank" rel='noreferrer'><FontAwesomeIcon icon={faTwitter} className = "icon"/></a></li>
                </ul>
            </div>
        </div>
    );
}