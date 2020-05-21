import * as actionTypes from '../actions/actionTypes.js';

const updateObject = (oldState, UpdatedProperties) => {
  return {
    ...oldState,
    ...UpdatedProperties
  }
}

const createTodo = (text) => ({
   checked: false,
   text: text,
   id: `${text},${new Date()},${Math.random()}`
})

const initialState = [
   {
     checked: true,
     text: 'Type some text',
     id: '1'
   }
];

const todoAdded = (state, action) => {
    const todo = createTodo(action.text);
    const copyTodos = [...state];
    copyTodos.push(todo);
    console.log(copyTodos);
    return copyTodos;
}

const checkboxTodo = (state, action) => {
     const copyTodos = [...state];
     const index = copyTodos.findIndex(obj => obj.id === action.id);
     console.log(index)
     copyTodos[index].checked = !state[index].checked;
     return copyTodos;
}

const deleteTodo = (state, action) => {
    var copyTodos = [...state];
    copyTodos = copyTodos.filter(obj => obj.id !== action.id);
    return copyTodos;
}


const reducer = ( state = initialState, action) =>{
    switch (action.type) {
      case actionTypes.ADDED_TODO: return todoAdded(state, action);
      case actionTypes.CHECKBOX_TODO: return checkboxTodo(state, action);
      case actionTypes.DELETE_TODO: return deleteTodo(state, action);
      default: return state;
    }
}
 export default reducer;
