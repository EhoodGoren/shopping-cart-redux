import { connect } from "react-redux";

function Checkout(props) {
    return(
        <div>
            <div>Your total is: {props.total}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

export default connect(mapStateToProps)(Checkout);
