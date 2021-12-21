import { connect } from 'react-redux';
import { addItem, removeItem } from './redux/actions/cartActions';
import { increaseStock, decreaseStock } from './redux/actions/productsActions';

function Product(props) {
    const generateAddButton = () => {
        const disabled = props.stocks[props.item] === 0 ? true : false
        return <button
                className='product-btns'
                onClick={() => props.addItem(props.item, props.price)}
                disabled={disabled}
            ><b>ADD</b></button>
    }
    const generateRemoveButton = () => {
        const originalProductStock = props.maxStocks[props.item];
        const disabled = props.stocks[props.item] === originalProductStock ? true : false
        return <button
                className='product-btns'
                onClick={() => props.removeItem(props.item, props.price)}
                disabled={disabled}
            ><b>REMOVE</b></button>
    }
    return (
        <div>
            <div className='product'>
                <div>
                    <span className="product-name">{props.item} - </span>
                    <span className="product-price">{props.price}$ </span> 
                </div>
                <div>
                    <span className="product-stock">IN STOCK: {props.stocks[props.item]}</span>
                </div>
            </div>
            <div className='product-btns'>
                {generateAddButton()}
                <span> | </span>
                {generateRemoveButton()}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        stocks: state.products.stocks,
        maxStocks: state.products.maxStocks
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
