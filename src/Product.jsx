import { connect } from 'react-redux';
import { addItem, removeItem } from './redux/actions/cartActions';
import { increaseStock, decreaseStock } from './redux/actions/productsActions';
import products from './productsData';

function Product(props) {
    const generateAddButton = () => {
        const disabled = props.stocks[props.item] === 0 ? true : false
        return <button onClick={() => props.addItem(props.item, props.price)} disabled={disabled}>+</button>
    }
    const generateRemoveButton = () => {
        const originalProductStock = products.find(product => product.item === props.item).stock;
        const disabled = props.stocks[props.item] === originalProductStock ? true : false
        return <button onClick={() => props.removeItem(props.item, props.price)} disabled={disabled}>-</button>
    }
    return (
        <div>
            <span className="product-name">{props.item} - </span>
            <span className="product-price">{props.price}$ </span> 
            <span className="product-stock">x {props.stocks[props.item]}</span>
            {generateAddButton()}
            {generateRemoveButton()}
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
