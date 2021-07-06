import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({          // Using combineReducer function to utilize multiple reducers.
    todos,
    visibilityFilter
})
