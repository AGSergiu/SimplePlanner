import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoState } from 'app/models/reducers/todo';


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
          isDone: data?.completed,
          timestamp: new Date().toISOString(),
        } as ITodoState,
      }),
    },
    deleteTodo(state, action: PayloadAction<{ todoId: string }>) {
      const index = state.findIndex(todo => todo.id === action.payload.todoId)
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
      todo.isDone = !todo?.isDone
    },
  },
})

export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions

export default todosSlice.reducer