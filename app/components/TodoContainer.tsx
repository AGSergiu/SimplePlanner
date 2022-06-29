import { RootState } from 'app/store/store'
import React from 'react'
import { FlatList, KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import { Button, Surface, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { Todo } from './Todo'
import EmptyState from './EmptyState/EmptyState'
import { getRandomQuote } from 'app/utils/utils'
import { ITodoState } from 'app/models/reducers/todo'
import Typography from './Typographic/Typography'
import { moveOnToday } from 'app/features/todo/todosSlice'
import moment from 'moment'


function TodoContainer() {
  const dispatch = useDispatch()
  const selectedDate = useSelector(
    (state: RootState) => moment(state.calendar.selectedDate),
  )
  const todoList = useSelector((state: RootState) => state.todo)?.filter(
    todo =>
      moment(todo.addedOn).isSame(selectedDate, 'day'),
  )

  const notDoneTasks = todoList.filter((todo) => todo.isDone === false)

  const moveTasksToToday = () => {
    todoList.map(todo => dispatch(moveOnToday({ id: todo.id })))
  }

  const renderMoveButton = () => {
    if (notDoneTasks.length > 0 && selectedDate.isBefore(moment(), 'day')) {
      return (<Button mode='outlined' onPress={moveTasksToToday}>Move {notDoneTasks.length} unfinished tasks on Today</Button>)
    };
  }

  const renderItem = ({ item, index }: { item: ITodoState, index: number }) => {
    return (<Todo key={item.id} todo={item} index={index} />)
  }

  if (todoList?.length > 0) {
    return (
      <Surface style={styles.mainContainer}>
        <FlatList
          data={todoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <View style={{ alignItems: "center", justifyContent: "center", width: "100%" }}>
          {renderMoveButton()}
        </View>
      </Surface>
    )
  } else {
    return (
      <Surface style={styles.mainContainer}>
        <Typography style={{ marginTop: 16, textAlign: 'center', }} variant={'regular'}>
          {getRandomQuote()?.text}
        </Typography>
        <EmptyState />

      </Surface>
    )
  }
}

export default TodoContainer

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 65,

  },
  todoContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  verticalLine: {
    backgroundColor: '#7d7d7d69',
    width: 0.5,
  },
})


