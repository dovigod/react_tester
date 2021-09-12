import { Link } from 'react-router-dom';
import './Navigation.css';
const Navigation = () => {
	return (
		<div className="nav">
			<Link to="/">Home</Link>
			<Link to="about">About</Link>
		</div>
	);
};

export default Navigation;

/*
normal html a tag -> refresh page.. -> use link 
cant use link outside of router
*/
