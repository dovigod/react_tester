import Proptypes from 'prop-types';
import React from 'react';
import FoodList from './foodlist.js';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('starting from constructor');
	}
	state = {
		count: 0
	};
	add = () => {
		this.setState((current) => ({
			count: current.count + 1
		}));
	};

	remove = () => {
		this.setState((current) => ({
			count: current.count - 1
		}));
	};
	componentDidMount = () => {
		console.log('component rendered');
	};

	componentDidUpdate = () => {
		console.log('component Updating finish');
	};
	componentWillUnmount = () => {
		console.log('bye~~');
	};
	render() {
		return (
			<>
				<h1>Hi from state :: {this.state.count}</h1>
				<button onClick={this.add}> Add </button>
				<button onClick={this.remove}> Minus </button>
			</>
		);
	}
}
export default App;

/* note
Life Cycle

Mounting => Born
constructor -> getD... -> render -> componentDidMount

Updating => update
getD... -> should? -> render -> getSnopShotBeforeRender - > componentDidUpdate


Unmounting => dead (when change Page, change Component by state change .. etc)
componentWillUnMount (when component is eliminated from DOM)
*/
