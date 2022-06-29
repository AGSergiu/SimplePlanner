import { ITodoState } from './../../models/reducers/todo';

export interface CheckBoxProps {
  todo: ITodoState
  onToggle: (isCompleted: boolean) => void
}
