import { get } from 'lodash';
import { SEARCH_MOVIE_START, SEARCH_MOVIE_ERROR, SEARCH_MOVIE_COMPLETE} from '../../consts/actionTypes';

const inicialState = {};

export default function(state = inicialState, action) {
	switch (action.type) {
		case SEARCH_MOVIE_START:
			return {...state};
			break;
		case SEARCH_MOVIE_ERROR:
			return {...state};
			break;
		case SEARCH_MOVIE_COMPLETE:
			return {...state};
			break;
		default:
			return  {...state};
	}
}
