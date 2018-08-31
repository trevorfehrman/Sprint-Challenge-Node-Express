import axios from "axios";

export const FETCHING_PROJECTS = "FETCHING_PROJECTS";
export const PROJECTS_FETCH_SUCCESS = "PROJECTS_FETCH_SUCCESS";
export const PROJECTS_FETCH_FAILURE = "PROJECTS_FETCH_FAILURE";

const PROJECT_URL = "http://localhost:6000/projects";

export const fetchProjects = () => dispatch => {
	dispatch({ type: FETCHING_PROJECTS });
	axios.get(PROJECT_URL).then(response => {
		dispatch({
			type: PROJECTS_FETCH_SUCCESS,
			payload: response.data,
		});
	});
};
