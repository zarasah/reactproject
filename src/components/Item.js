export default function Item(props) {
    const { name, price, img } = props.data;

    return (
        <div className = "item">
            <img src = {img} alt = {name} className = "item-img"/>
            <h4>{name}</h4>
            <p>$ {price} USD</p>
        </div>
    )
}