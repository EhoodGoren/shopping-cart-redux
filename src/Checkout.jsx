import { connect } from "react-redux";
import CartItem from "./CartItem";
import { cartCheckout } from './redux/actions/cartActions';
import { productsCheckout } from './redux/actions/productsActions';

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
        return <button onClick={() => props.checkout()} disabled={disabled}>Checkout</button>
    }
    return(
        <div>
            <div>Your Cart:</div>
            {generateCart()}
            <div>Total: {props.total}$</div>
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
