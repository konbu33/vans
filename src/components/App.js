import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import {	increment, 
			decrement, 
			reset0, 
			increment10, 
			decrement10, 
		} from '../actions/count';

class App extends Component {
	render() {
		const props = this.props;

		return (
			<Fragment>
				<div>Counter:{ props.value }</div>
				<button onClick={ props.increment }>+1</button>
				<button onClick={ props.increment10 }>+10</button>
				<button onClick={ props.reset0 }>reset0</button>
				<button onClick={ props.decrement }>-1</button>
				<button onClick={ props.decrement10 }>-10</button>
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
			},
			reset0: () => {
				dispatch(reset0());
			},
			increment10: () => {
				dispatch(increment10());
			},
			decrement10: () => {
				dispatch(decrement10());
			},
		}
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

