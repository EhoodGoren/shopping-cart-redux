import { connect } from "react-redux";
import CartItem from "./CartItem";
import { cartCheckout } from './redux/actions/cartActions';
import { productsCheckout } from './redux/actions/productsActions';
import './Checkout.css';

function Checkout(props) {
    const generateCart = () => {
        const cart = [];
        for(const item in props.items) {
            cart.push(
                <CartItem key={item} item={item} quantity={props.items[item]} />
            )
        }
        return cart;
    }
    const generateCheckout = () => {
        const disabled = Object.keys(props.items).length === 0 ? true : false
        return <button id='checkout-btn' onClick={() => props.checkout()} disabled={disabled}>Checkout</button>
    }
    return(
        <div id='checkout-div'>
            {generateCart()}
            <br />
            <div id='price-break'></div>
            <br />
            <div id='order-total'><b>ORDER TOTAL:</b> <span className='order-price'><b>{props.total}$</b></span></div>
            <br></br>
            {generateCheckout()}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.cart.total,
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkout: () => {
            dispatch(cartCheckout())
            dispatch(productsCheckout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
