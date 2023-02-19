export default function Item(props) {
    const { name, price, img, id } = props.data;

    return (
        <div className = "item">
            <a href = {id}><img src = {img} alt = {name} className = "item-img"/></a>
            <h4>{name}</h4>
            <p>$ {price} USD</p>
        </div>
    )
}