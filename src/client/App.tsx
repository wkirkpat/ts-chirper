import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"


class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			chirps: null
		};
	}
	
	async componentDidMount() {
		try {
			let r = await fetch('/chirps');
			console.log(r);
			let chirps = await r.json();
			console.log(chirps);
			this.setState({ chirps });
		} catch (error) {
			console.log(error);
		}
	}
	
	render() {
		return (
			<main className="container my-5">
				<ul>
					{/* {this.state.chirps.map(() => {

					})} */}
				</ul>
				<Router>
					<Switch>
						<Route exact path="/" component={App} />
					</Switch>
				</Router>
			</main>
		);
	}
}

interface IChirps {
	name: string
	text: string
}

export interface IAppProps {}

export interface IAppState {
	chirps: IChirps;
}

export default App;
