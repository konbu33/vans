import { READ_EVENTS } from '../actions';
import _ from 'lodash';

export default (events={}, action) => {
	switch(action.type) {
		case READ_EVENTS: 
			console.log('array', action.response.data);
			//return action.response.data;

			//console.log('2', _.mapKeys(action.response.data, 'id'));
			return _.mapKeys(action.response.data, 'id');
		default: 
			return events;
	}
};

