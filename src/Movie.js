import PropTypes from 'prop-types';

//doesn't need state

const Movie = ({ id, title, summary, rating, poster, year, runTime }) => {
	return (
		<>
			<h1> key = {id}</h1>
			<h3>{title}</h3>
			<img src={poster}></img>
			<h4> {year}</h4>
			<h4> {runTime}</h4>
			<h5>{summary}</h5>
		</>
	);
};

export default Movie;

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	summary: PropTypes.string,
	rating: PropTypes.number,
	poster: PropTypes.string.isRequired,
	year: PropTypes.number.isRequired,
	runTime: PropTypes.number.isRequired
};
