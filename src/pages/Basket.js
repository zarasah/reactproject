export default function Basket(props) {
  if (props.data.length === 0) {
    return (
      <div className = "basket-page-empty">
        <p>Basket is empty</p>
      </div>
    )
  }

  const data = props.data;
    return (
      <div className = "basket-page">
        {
          data.map((item) => {
            const { name, price, img, id, count } = item;
            return (
              <div key = {id} className = "basket-page-item">
                <img src = {img} alt = {name} className = "basket-page-img"/>
                <h5>{name}</h5>
                <p>$ {price} USD</p>
                <p>{count}</p>
              </div>
            )
          })
        }
      </div>
    )
}
  