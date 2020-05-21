import * as actionTypes from './actionTypes.js';

export const todoAdded = (text) => {
  return {
    type: actionTypes.ADDED_TODO ,
    text: text
  }
}

export const checkboxTodo = (id) => {
  return {
    type: actionTypes.CHECKBOX_TODO,
    id: id
  }
}

export const deleteTodo = (id) => {
  return {
    type: actionTypes.DELETE_TODO,
    id: id
  }
}
