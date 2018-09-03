import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';
import _ from 'lodash';

class EventsIndex extends Component {
	componentDidMount() {
		this.props.readEvents();
	}

	renderEvents() {
		return _.map(this.props.events, event => (
			<tr key={event.id}>
				<td>{event.id}</td>
				<td>{event.title}</td>
				<td>{event.body}</td>
			</tr>
		)) 
	};

	render() {
		const props = this.props;

		return (
			<Fragment>
				<div>{console.log('Object: ', props.events)}</div>

				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Title</th>
							<th>Body</th>
						</tr>
					</thead>
					<tbody>
						{this.renderEvents()}
					</tbody>
				</table>

			</Fragment>
		);
	}
}

const mapStateToProps = (state) => ( { events: state.events } );

const mapDispatchToProps = ({ readEvents });

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex);

