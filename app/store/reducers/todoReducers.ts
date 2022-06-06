import createReducer from 'app/lib/createReducer';
import {
  ITodoDeleteState,
  ITodosState,
  ITodoState,
} from 'app/models/reducers/todo';
import uuid from 'react-native-uuid';
import * as types from 'app/store/actions/types';
import { ITodoRequestState } from 'app/models/actions/todo';

const initialState: ITodosState = {
  todos: [],
};

export const todoReducer = createReducer(initialState, {
  [types.TODO_ADD](state: ITodosState, action: ITodoRequestState) {
    return {
      ...state,
      todos: {
        id: uuid.v4(),
        text: action.text,
        isDone: action.isDone,
        timestamp: new Date().toISOString(),
      },
    };
  },
  [types.TODO_DELETE](state: ITodosState, action: ITodoDeleteState) {
    return {
      ...state.todos.filter((todo: ITodoState) => todo.id !== action.id),
    };
  },
});
