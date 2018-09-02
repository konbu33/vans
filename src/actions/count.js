export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({
	type: INCREMENT
})

export const decrement = () => ({
	type: DECREMENT
})



export const INCREMENT10 = 'INCREMENT10';
export const DECREMENT10 = 'DECREMENT10';
export const RESET0 = 'RESET0';

export const increment10 = () => {
	return (
		{ type: INCREMENT10 }
	)
}

export const decrement10 = () => {
	return (
		{ type: DECREMENT10 }
	)
}

export const reset0 = () => {
	return (
		{ type: RESET0 }
	)
}

