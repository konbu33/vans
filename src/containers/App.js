import App from '../components/App';
import { connect } from 'react-redux';
import { plus, minus } from '../actions/count';

const mapStateToProps = (state) => {
	return { 
		count: state.count,
		title: state.title,
		day:   state.day,
	};
};
const mapDispatchToProps = (dispatch) => {
	return { 
		plus:  (num) => { dispatch(plus(num)  ) }, 
		minus: (num) => { dispatch(minus(num) ) }, 
	}
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;

