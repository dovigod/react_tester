import Proptypes from 'prop-types';
import React from 'react';
import FoodList from './foodlist.js';

class App extends React.Component {
	state = {
		count: 0
	};
	add = () => {
		this.setState((potato) => ({
			count: potato.count + 1
		}));
	}; // much better!!! best practice not to depend on external state

	remove = () => {
		this.setState({ count: this.state.count - 1 });
	};
	//bad
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
not good idea.. depending on state -> performance issue.


this.setState( current => ({count: current.count -1 }));

Is the same as

this.setState( current => {return current.count += 1});


=> ({}) is part of implicit return
*/
