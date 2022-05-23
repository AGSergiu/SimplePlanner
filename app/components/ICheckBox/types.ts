import { TodoModel } from '@/features/todo/todoSlice'

export interface CheckBoxProps {
  todo: TodoModel
  onToggle: (isCompleted: boolean) => void
}
