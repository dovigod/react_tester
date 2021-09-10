import Proptypes from 'prop-types';
import React from 'react';
import FoodList from './foodlist.js';

class App extends React.Component {
	state = {
		count: 0
	};
	add = () => {
		this.state.count += 1;
	};

	remove = () => {
		this.state.count -= 1;
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
for real dynamic data from API , we need to know about 'state'

function components to class components

render Method from react.component
class component automatically execute render method

unique object called 'state'

onclick attribute automatically given from react (unique only for react)
*/
