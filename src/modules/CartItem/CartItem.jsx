import './CartItem.scss'

const state = [
  {
    id: '1',
    title: 'Букет из роз Grand Avalanche (101 шт)',
    image: 'https://dull-rose-pawpaw.glitch.me/img/39.jpg',
    price: 14800,
    value: 1,
  },
  {
    id: '2',
    title: 'Букет из тюльпан Dolche vita (51 шт)',
    image: 'https://dull-rose-pawpaw.glitch.me/img/38.jpg',
    price: 6700,
    value: 2,
  },
  {
    id: '3',
    title: 'Букет из роз Grand Mirabel (101 шт)',
    image: 'https://dull-rose-pawpaw.glitch.me/img/41.jpg',
    price: 21300,
    value: 3,
  }
];

const CartItem = () => {
  return(
    <>
      {state.map(item => (
        <li className="cart__item" key={item.id}>
          <img className="cart__img"
            src={item.image}
            alt={item.title} />
          <h4 className="cart__item-title">{item.title}</h4>
          <div className="cart__counter"><button
              className="cart__counter-btn">-</button><input
              className="cart__counter-input" type="number" max="99" min="0"
              value={item.value} /><button className="cart__counter-btn">+</button></div>
          <p className="cart__price">{item.price * item.value}&nbsp;₽</p>
        </li>
      ))}
    </>
  )
}

export default CartItem;
