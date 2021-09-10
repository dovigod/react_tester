import Proptypes from 'prop-types';
import FoodList from './foodlist.js';

const Food = ({ name, image, rating }) => {
	return (
		<div className="foodItem">
			<img src={image} alt={`food::${name}`} />
			<h3> I Love components {name}!!</h3>
			<h4>rating :: {rating}</h4>
		</div>
	);
};

Food.propTypes = {
	name: Proptypes.string.isRequired,
	image: Proptypes.string.isRequired,
	rating: Proptypes.number.isRequired
};

const foodRenderer = (food) => {
	return <Food key={food.id} name={food.name} image={food.image} rating={food.rating} />;
};
function App() {
	return (
		<>
			<div className="App"></div>
			{FoodList.map(foodRenderer)}
		</>
	);
}

export default App;

/* note
check whether props are valid or not

proptypes :: module -> checks whether its valid type
*/
