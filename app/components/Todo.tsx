import { toggleTodo } from 'app/features/todo/todosSlice'
import { ITodoState } from 'app/models/reducers/todo'
import { Colors, FontSize } from 'app/Theme/Variables'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Divider, Text } from 'react-native-paper'
import Animated, {
  Easing,
  FadeInDown,
  Layout
} from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import DeleteWrapper from './DeleteWrap/DeleteWrapper'
import TodoCheckbox from './ICheckBox/Checkbox'
import Typography from './Typographic/Typography'

type OwnProps = {
  todo: ITodoState,
  index: number
}

export const Todo = ({ todo, index }: OwnProps) => {
  const dispatch = useDispatch()
  const handleToggle = () => {
    dispatch(toggleTodo({ id: todo.id }))
  }
  return (
    <Animated.View entering={FadeInDown}
      layout={Layout.easing(Easing.bounce).delay(index * 100)}
    >
      {todo.isDone === false || todo.isDone === true ? (
        <DeleteWrapper todoId={todo.id}>
          <TodoCheckbox todo={todo} onToggle={handleToggle} />
        </DeleteWrapper>
      ) : (
          <DeleteWrapper todoId={todo.id}>
            <Typography variant='todo' style={{ marginLeft: 8 }}>{todo.text}</Typography>
          </DeleteWrapper>
      )}
      {/* <Divider /> */}
    </Animated.View>
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
