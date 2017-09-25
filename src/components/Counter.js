import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class Counter extends React.Component {
    render() {
        console.log("this.props", this.props);
        return (
            <div>
                {this.props.state}
                <div>
                    <button onClick={this.props.increment}>+</button>
                    <button onClick={this.props.decrement}>-</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { state };
};

const mapDispatchToProps = (dispatch) => {
    return {
        decrement: () => {
            dispatch(decrement());
        },
        increment: () => {
            dispatch(increment());
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Counter);