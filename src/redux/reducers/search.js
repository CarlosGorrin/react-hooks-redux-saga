import { get } from 'lodash';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE} from '../../consts/actionTypes';

const inicialState = {};

export default function(state = inicialState, action) {
	switch (action.type) {
		case SEARCH_MOVIE_START:
			return { ...state, isLoading: true };
			break;
		case SEARCH_MOVIE_ERROR:
			console.log(action);
			return { ...state, isLoading: false, movies: null };
			break;
		case SEARCH_MOVIE_COMPLETE:
			console.log(action);
			return { ...state, isLoading: false, movieResults: action.results.data };
			break;
		default:
			return  { ...state };
	}
}
