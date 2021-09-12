import PropTypes from 'prop-types';
import './Movie.css';
//doesn't need state

const Movie = ({ id, title, summary, rating, poster, year, runTime, genres }) => {
	return (
		<div className="movie">
			<img className="movie_poster" src={poster}></img>
			<div className="movie_data">
				<h3 className="movie_title">{title}</h3>
				<ul className="movie_genres">
					{genres.map((genre, idx) => {
						if (idx == genres.length - 1) {
							return <li className="genre">{genre}</li>;
						}
						return <li className="genre">{genre},</li>;
					})}
				</ul>
				<h4 className="movie_year"> {year}</h4>
				<h3 className="movie_rating">{rating}</h3>
				<h5 className="movie_summary">{summary.slice(0, 180)}...</h5>
			</div>
		</div>
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
	runTime: PropTypes.number.isRequired,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired
};
