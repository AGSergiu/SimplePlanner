import { TodoModel, toggleTodo } from '@/features/todo/todoSlice'
import { Colors, FontSize } from '@/Theme/Variables'
import React from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import MarkdownDisplay from './MarkdownDisplay/RNMarkdown'
import { Divider, Surface } from 'react-native-paper'
import TodoCheckbox from './ICheckBox/Checkbox'
import DeleteWrapper from './DeleteWrap/DeleteWrapper'

type OwnProps = {
  todo: TodoModel
}

export const Todo = ({ todo }: OwnProps) => {
  const dispatch = useDispatch()

  const handleToggle = (isCompleted: boolean) => {
    dispatch(toggleTodo({ completed: isCompleted, id: todo.id }))
  }
  return (
    <Surface style={styles.container}>
      {todo.completed === false || todo.completed === true ? (
        <DeleteWrapper todoId={todo.id}>
          <TodoCheckbox todo={todo} onToggle={handleToggle} />
        </DeleteWrapper>
      ) : (
          <DeleteWrapper todoId={todo.id}>
          <MarkdownDisplay text={todo.text} />
          </DeleteWrapper>
      )}
      <Divider />
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 8,
  },
  todo: {
    alignContent: 'center',
    flexDirection: 'row',
    height: '100%',
    margin: 8,
  },
  checkBox: {
    marginLeft: 8,
  },
  text: {
    color: Colors.secondary,
    fontSize: FontSize.small,
    fontFamily: 'Menlo-Regular',
    fontWeight: 'bold',
    paddingLeft: 28,
  },
})
