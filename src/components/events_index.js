import React, { Component } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents();
	}

	render() {
		return (
			<p>To get started, edit <code>src/App.js</code> and save to reload.</p>
		);
	}
}

const mapStateToProps = (state) => ( {} );

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

