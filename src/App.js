import Proptypes from 'prop-types';
import React from 'react';
import FoodList from './foodlist.js';

class App extends React.Component {
	state = {
		count: 0
	};
	add = () => {
		this.setState({ count: this.state.count + 1 });
	};

	remove = () => {
		this.setState({ count: this.state.count - 1 });
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
never change state directly, use methods setState
else react wont refresh states

when setState,  react will call render function with new state!!!
+ it will update only modified part
*/
