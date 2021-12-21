function CartItem(props) {
    return(
        <div className="cart-item">
            <span className="cart-item-name">{props.item}$</span>
            <span className="cart-item-quantity">x {props.quantity}</span>
        </div>
    )
}

export default CartItem;
