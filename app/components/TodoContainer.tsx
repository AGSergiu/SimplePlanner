import { RootState } from 'app/store/store'
import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'
import EmptyState from './EmptyState/EmptyState'
import { getRandomQuote } from 'app/utils/utils'


function TodoContainer() {
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate),
  )
  const todoList = useSelector((state: RootState) => state.todo)?.filter(
    todo =>
      new Date(todo.addedOn).toDateString() === selectedDate.toDateString(),
  )
  if (todoList?.length > 0) {
    return (
      <Surface style={styles.mainContainer}>
        <ScrollView style={styles.scrollView}>
          {todoList?.map((todo, index) => {
            return <Todo key={todo.id} todo={todo} index={index} />
          })}
        </ScrollView>
      </Surface>
    )
  } else {
    return (
      <Surface style={styles.mainContainer}>
        <Text
          adjustsFontSizeToFit
          style={{
            flex: 1,
            fontSize: 20,
            marginTop: 16,
            textAlign: 'center',

          }}
        >
          {getRandomQuote()?.text}
        </Text>
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
