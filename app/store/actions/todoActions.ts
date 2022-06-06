import { ITodoState } from 'app/models/reducers/todo';
/*
 * Reducer actions related with todo
 */
import * as types from './types';
import { ILoginResponse } from 'app/models/api/login';
import { ITodoRequestState } from 'app/models/actions/todo';


export function addTodo(payload: ITodoRequestState) {
  return {
    type: types.TODO_ADD,
    payload
  }
}

