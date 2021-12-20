import { connect } from 'react-redux';
import { addItem, removeItem } from './redux/actions';

function Product(props) {
    return (
        <div>
            <span className="product-name">{props.item} - </span>
            <span className="product-price">{props.price}$ </span> 
            <span className="product-stock">x {props.stock}</span>
            <button onClick={() => props.addItem(props.item, props.price)}>+</button>
            <button onClick={() => props.removeItem(props.item, props.price)}>-</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item, price) => dispatch(addItem(item, price)),
        removeItem: (item, price) => dispatch(removeItem(item, price))
    }
}

export default connect(null, mapDispatchToProps)(Product);
