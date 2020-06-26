import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";



const App: React.FC<IAppProps> = (props) => {
		return (
			<main className="container my-5">
				<Router>
					<Link to="/"><button className="btn btn-primary">Home</button></Link>
					<Link to="/add"><button className="btn btn-primary">Add Chirp</button></Link>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path = "/add" component={AddChirp} />
					</Switch>
				</Router>
			</main>
		);
}


export interface IAppProps { }

export default App;
