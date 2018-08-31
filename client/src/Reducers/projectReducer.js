import {
	FETCHING_PROJECTS,
	PROJECTS_FETCH_SUCCESS,
	PROJECTS_FETCH_FAILURE,
} from "../Actions";

const intialState = {
	projects: [],
	fetchingProjects: false,
};

export const projectReducer = (state = intialState, action) => {
	switch (action.type) {
		case FETCHING_PROJECTS:
			return {
				...state,
				fetchingProjects: true,
			};
		case PROJECTS_FETCH_SUCCESS:
			return {
				...state,
				projects: [...action.payload],
				fetchingProjects: false,
			};
		default:
			return state;
	}
};
