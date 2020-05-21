import * as actionTypes from '../actions/actionTypes.js';


const createTodo = (text) => ({
   checked: false,
   text: text,
   deleted: false
})

const initialState = {
    todos: [

    ]
}

const todoAdded = (state, action) => {
    const todo = createTodo(action.text);
    const copyState = state;
    copyState.push(todo);
    console.log(copyState);
    return copyState.push(todo);
}

const reducer = ( state = initialState, action) =>{
    switch (action.type) {
      case actionTypes.ADDED_TODO: return todoAdded(state, action);
      default: return state;
    }
}
 export default reducer;
