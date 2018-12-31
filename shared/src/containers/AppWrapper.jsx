import React, {Component} from "react";
import {Provider} from "react-redux";
import api from "../api";
import setupStore from "../store";

// setup redux store
const store = setupStore(api);

const App = (Wrapper) => {
	return (class extends Component {
		render() {
			return (
				<Provider store={store}>
					<Wrapper>
						{this.props.children}
					</Wrapper>
				</Provider>
			);
		}
	})
};

export default App;
