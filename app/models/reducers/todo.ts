export interface ITodosState {
  todos: ITodoState[]
}

export interface ITodoState {
  id: string;
  text: string;
  timestamp: string;
  isDone?: boolean;
}

export interface ITodoDeleteState {
  id: string
}