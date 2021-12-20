import { connect } from 'react-redux';
import { addItem } from './redux/actions';

function Products(props) {
    return(
        <div id='products'>
            <button onClick={props.addItem}>+</button>
            <div>Iphone</div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: () => dispatch(addItem())
    }
}

export default connect(null, mapDispatchToProps)(Products);
