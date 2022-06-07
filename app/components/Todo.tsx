import React from 'react'
import { StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { Divider, Surface, Text } from 'react-native-paper'
import { ITodoState } from 'app/models/reducers/todo'
import { toggleTodo } from 'app/features/todo/todosSlice'
import DeleteWrapper from './DeleteWrap/DeleteWrapper'
import TodoCheckbox from './ICheckBox/Checkbox'
import { Colors, FontSize } from 'app/Theme/Variables'

type OwnProps = {
  todo: ITodoState
}

export const Todo = ({ todo }: OwnProps) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }))
  }
  return (
    <Surface style={styles.container}>
      {todo.isDone === false || todo.isDone === true ? (
        <DeleteWrapper todoId={todo.id}>
          <TodoCheckbox todo={todo} onToggle={handleToggle} />
        </DeleteWrapper>
      ) : (
          <DeleteWrapper todoId={todo.id}>
            <Text style={{ marginLeft: 8, fontSize: FontSize.regular, }}>{todo.text}</Text>
          </DeleteWrapper>
      )}
      <Divider />
    </Surface>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: 8,
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
