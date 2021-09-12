import React from 'react';

class Detail extends React.Component {
	componentDidMount() {
		const { location, history } = this.props;
		if (location.state == undefined) {
			console.log(history);
			history.push('/');
		}
	}
	render() {
		const { location } = this.props;
		if (location.state) {
			return <span>{location.state.title}</span>;
		} else {
			return null;
		}
	}
}
export default Detail;
/*

if just type -movie-detai; => state undefined..need to handle
history => now can change url whereever
*/
