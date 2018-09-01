import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

class App extends Component {
	render() {
		const props = this.props;
		console.log(this.props);

		return (
			<Fragment>
				<div>Counter:{ props.value }</div>
				<button onClick={ props.increment }>+1</button>
				<button onClick={ props.decrement }>-1</button>
			</Fragment>
		)
	}
};

const mapStateToProps = (state) => {
	return (
		{
			value: state.count.value,
			name: 'apple'
		}
	)
}

const mapDispatchToProps = (dispatch) => {
	return (
		{
			increment: () => {
				dispatch(increment());
			},
			decrement: () => {
				dispatch(decrement());
			}
		}
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

