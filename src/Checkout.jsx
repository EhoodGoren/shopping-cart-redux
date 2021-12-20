import { connect } from "react-redux";
import CartItem from "./CartItem";

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
    return(
        <div>
            <div>Cart:</div>
            {generateCart()}
            <div>Your total is: {props.total}$</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.total,
        items: state.items
    }
}

export default connect(mapStateToProps)(Checkout);
