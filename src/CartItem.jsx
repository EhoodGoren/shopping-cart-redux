function CartItem(props) {
    return(
        <div>
            <span className="cart-item-name">{props.item}$ x </span>
            <span className="cart-item-quantity">{props.quantity}</span>
        </div>
    )
}

export default CartItem;
