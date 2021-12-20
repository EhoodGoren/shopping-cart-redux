import { connect } from 'react-redux';
import { addItem, removeItem } from './redux/actions/cartActions';
import { increaseStock, decreaseStock } from './redux/actions/productsActions'

function Product(props) {
    return (
        <div>
            <span className="product-name">{props.item} - </span>
            <span className="product-price">{props.price}$ </span> 
            <span className="product-stock">x {props.stocks[props.item]}</span>
            <button onClick={() => props.addItem(props.item, props.price)}>+</button>
            <button onClick={() => props.removeItem(props.item, props.price)}>-</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        stocks: state.products.stocks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item, price) => {
            dispatch(addItem(item, price))
            dispatch(decreaseStock(item))
        },
        removeItem: (item, price) => {
            dispatch(removeItem(item, price))
            dispatch(increaseStock(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
