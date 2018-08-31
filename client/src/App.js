import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProjects } from "./Actions";
import "./App.css";

class App extends Component {
	state = {};

	componentDidMount() {
		this.props.fetchProjects();
	}

	render() {
		return (
			<div className="App">
				<p>hi</p>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	projects: state.projectReducer.projects,
});

export default connect(
	mapStateToProps,
	{ fetchProjects },
)(App);
