const todos = (state = [], action ) => {
    switch(action.type) {
        case 'ADD_TODO':
          return [                           //State tree
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }

          ]
        case 'TOGGLE_TODO':
          return state.map(todo =>
            todo.id === action.id ? {...todo, completed: !todo.completed} : todo    // Using ternary operator to display completed todos
            )
        default: 
            return state 

    }

}
  export default todos 