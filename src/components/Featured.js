import './Featured.css'

export default function Featured(props) {
    const data = props.data;

    if (data.length > 3) {
        data.pop();
    }

    return (
        <>
        <h4>Featured</h4>
            <div className = "featured">
            {
                data.map((item) => {
                    return (
                        <div key = {item.id} className = "featured-item">
                            <img src = {item.img} alt = {item.name}/>
                            <p>{item.name}</p>
                        </div>)
                })
            }
        </div>
        </>
    )
}