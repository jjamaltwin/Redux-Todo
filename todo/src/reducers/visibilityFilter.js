import {VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter
      default:
        return state                                  // Setting inital state for filter to SHOW_ALL
    }
  }
  
  export default visibilityFilter