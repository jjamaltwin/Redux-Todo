import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/index'
import Link from '../components/Link';


const mapStateToProps =(state, ownProps) => {
  return {
      active: ownProps.filter === state.visibilityFilter 
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(           //Connecting component to the store, in order to get data from store's internal state. Allowing App to re-render and get new data!    
    mapStateToProps,
    mapDispatchToProps
)(Link)     // Connecting this state to Link component 
export default FilterLink