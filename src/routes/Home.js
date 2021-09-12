import Proptypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie.js';
import './Home.css';
let newKey = 99;

class Home extends React.Component {
	state = {
		isLoading: true,
		movies: []
	};
	getMovies = async () => {
		const {
			data: {
				data: { movies }
			}
		} = await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating');
		this.setState({ movies, isLoading: false });
	};

	componentDidMount = () => {
		this.getMovies();
	};

	render() {
		const { isLoading, movies } = this.state;

		return (
			<>
				<section className="container">
					{!isLoading ? (
						<div className="movies">
							{movies.map((movie, idx) => (
								<Movie
									key={idx}
									id={movie.id}
									title={movie.title}
									summary={movie.summary}
									rating={movie.rating}
									poster={movie.medium_cover_image}
									year={movie.year}
									runTime={movie.runtime}
									genres={movie.genres}
								/>
							))}
						</div>
					) : (
						<div className="loader">
							<span className="loader_text">Loading...</span>
						</div>
					)}
				</section>
			</>
		);
	}
}
export default Home;

/* note

*/
