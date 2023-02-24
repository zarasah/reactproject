import './Search.css';

export default function Search({search}) {
    return (
        <div className = "search">
            <form action = "#">
                    <input type="text" placeholder="Search" onChange={(event) => search(event.target.value)}/>
                    <button type="submit"><img src = "search.png" alt = 'icon'/></button>
            </form>
        </div>
    )
}