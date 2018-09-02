import React, { Fragment } from 'react';

const App = ({count, title, day, plus, minus}) => {
	return (
		<Fragment>
			<h2>{ title }</h2>
			<h2>{ day }</h2>
			<div>Counter:{ count }</div>
			<button onClick={ () => { plus(10) }  }>+10</button>
			<button onClick={ () => { minus(10) } }>-10</button>
		</Fragment>
	)
};

export default App;

