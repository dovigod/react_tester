import Proptypes from 'prop-types';
import React from 'react';
import axios from 'axios';
import Movie from './Movie.js';

let newKey = 99;

class App extends React.Component {
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
		console.log(movies);

		this.setState({ movies, isLoading: false });
	};

	componentDidMount = () => {
		this.getMovies();
	};

	render() {
		const { isLoading, movies } = this.state;

		return (
			<>
				<div>
					{!isLoading
						? movies.map((movie) => {
								console.log(movie.id);
								return (
									<Movie
										key={movie.id}
										id={movie.id}
										title={movie.title}
										summary={movie.summary}
										rating={movie.rating}
										poster={movie.medium_cover_image}
										year={movie.year}
										runTime={movie.runtime}
									/>
								);
						  })
						: 'loading...'}
				</div>
			</>
		);
	}
}
export default App;

/* note

*/
