import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

store.subscribe( () => {
	console.log(store.getState());
})

ReactDOM.render(
	<Provider store={store}>
		<App />	
	</Provider>
	, document.getElementById('root')
);

registerServiceWorker();

