import Proptypes from 'prop-types';
import React from 'react';
import FoodList from './foodlist.js';

class App extends React.Component {
	state = {
		isLoading: true,
		movies: []
	};

	componentDidMount = () => {
		setTimeout(() => {
			this.setState({ isLoading: false });
		}, 2000);
	};
	render() {
		const { isLoading } = this.state;

		return (
			<>
				<div>{!isLoading ? 'We are ready' : 'loading...'}</div>
			</>
		);
	}
}
export default App;

/* note

*/
