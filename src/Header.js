import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className = "header">
            <div className = "navbar">
                <NavLink to = "/">Home</NavLink>
                <NavLink to = "/shop">Shop</NavLink>
                <NavLink to = "/blog">Blog</NavLink>
                <NavLink to = "/about">About</NavLink>
                <NavLink to = "/contact">Contact</NavLink>
            </div>
        </div>
    );
}