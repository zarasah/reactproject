import { NavLink } from 'react-router-dom';
import Search from './Search';
import Basket from './Basket';
import './Header.css';

export default function Header(props) {
    return (
        <div className = "header">
            <div className = "header-left">
                <div className = "logo">
                    <img src = "logo.jpg" alt = "logo"/>
                </div>
                <div className = "navbar">
                    <NavLink to = "/">Home</NavLink>
                    <NavLink to = "/shop">Shop</NavLink>
                    <NavLink to = "/blog">Blog</NavLink>
                    <NavLink to = "/about">About</NavLink>
                    <NavLink to = "/contact">Contact</NavLink>
                </div>
            </div>
            <div className = "header-right">
                <Search search = {props.search}/>
                <Basket count = {props.count}/>
            </div>
        </div>
    );
}