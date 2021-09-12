import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
const App = () => {
	return (
		<HashRouter>
			<Route path="/" exact={true} component={Home} />
			<Route path="/about" component={About} />
		</HashRouter>
	);
};

export default App;
