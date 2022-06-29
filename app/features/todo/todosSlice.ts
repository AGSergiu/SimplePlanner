import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoState } from 'app/models/reducers/todo';
import moment from "moment";


const initialState = [] as ITodoState[]

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<ITodoState>) => {
        state.push(action.payload)
      },
      prepare: data => ({
        payload: {
          id: Date.now().toString(),
          text: data.text,
          addedOn: data?.addedOn,
          isDone: data?.isDone,
        } as ITodoState,
      }),
    },
    deleteTodo(state, action: PayloadAction<{ id: string }>) {
      const index = state.findIndex(todo => todo.id === action.payload.id)
      if (index !== -1) {
        state.splice(index, 1)
      }
    },
    toggleTodo(
      state,
      action: PayloadAction<{ id: string }>,
    ) {
      const todo = state.find(todo => todo.id === action.payload.id)
      //will happening only if is a checkbox todo
      if (todo)
        todo.isDone = !todo?.isDone
    },
    moveOnToday(
      state,
      action: PayloadAction<{ id: string }>,
    ) {
      const todo = state.find(todo => todo.id === action.payload.id)
      if (todo) todo.addedOn = moment().toJSON()
    }
  },
})

export const { addTodo, deleteTodo, toggleTodo, moveOnToday } = todosSlice.actions

export default todosSlice.reducer