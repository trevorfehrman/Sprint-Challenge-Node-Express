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
				{this.props.projects.map(project => {
					return (
						<div key={project.id}>
							<h3>{project.name}</h3>
							<p>{project.description}</p>
						</div>
					);
				})}
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
