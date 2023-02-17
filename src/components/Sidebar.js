import './Sidebar.css'

export default function Sidebar() {
    return (
        <div className = "sidebar">
            {/* <nav>Sidebar</nav> */}
            <h4>Categories</h4>
                <ul>
                    <li><a href = "/#">All products</a></li>
                    <li><a href = "/#">Accessories</a></li>
                    <li><a href = "/#">Clothes</a></li>
                    <li><a href = "/#">Perfume</a></li>
                    <li><a href = "/#">Shoes</a></li>
                </ul>
        </div>
    );
}