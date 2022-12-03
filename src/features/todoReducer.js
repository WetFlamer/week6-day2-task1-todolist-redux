import {createReducer } from "@reduxjs/toolkit";

export const initialState = {
  todos: [],

}



const todoReducer = createReducer(initialState, (builder) => {
  builder
  .addCase('add', (state, action) => {
    state.todos.push({text: action.payload, completed: false})
  })
  .addCase('delete', (state, action) => {
    state.todos = state.todos.filter((el, index) => {
      if(index === action.payload){
        return false
      }
      return true
    })
  })
  .addCase('check', (state, action) => {
    state.todos.map((el, index) => {
if(index === action.payload) {
  el.completed =! el.completed
}
return true
    })
  })
});

export default todoReducer