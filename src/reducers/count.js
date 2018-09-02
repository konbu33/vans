import { 	INCREMENT, 
			DECREMENT,
			RESET0,
			INCREMENT10,
			DECREMENT10,
		} from '../actions/count';

const initialState = {
	value: 0,
};

export default (state=initialState, action) => {
	switch(action.type) {
		case INCREMENT : {
			return {
				value: state.value + 1
			}
		}
		case DECREMENT : {
			return {
				value: state.value - 1
			}
		}
		case RESET0: {
			return { value: 0 }
		}
		case INCREMENT10: {
			return { value: state.value + 10 }
		}
		case DECREMENT10: {
			return { value: state.value - 10 }
		}
		default: {
			return state
		}
	}
};

