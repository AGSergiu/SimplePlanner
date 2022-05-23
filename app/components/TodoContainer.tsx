import { RootState } from '@/Store'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'


function TodoContainer() {
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate),
  )
  const todoList = useSelector((state: RootState) => state.todo)?.filter(
    todo =>
      new Date(todo.inputDate).toDateString() === selectedDate.toDateString(),
  )

  if (todoList?.length > 0) {
    return (
      <Surface style={styles.mainContainer}>
        <ScrollView style={styles.scrollView}>
          {todoList?.map(todo => {
            return <Todo key={todo.id} todo={todo} />
          })}
        </ScrollView>
      </Surface>
    )
  } else {
    return (
      <Surface style={styles.mainContainer}>
        <View
          style={{
            flex: 1,
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              textAlign: 'center',
            }}
          >
            What great plans do you have for today?
          </Text>
        </View>
      </Surface>
    )
  }
}

export default TodoContainer

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginBottom: 78,
  },
  todoContainer: {
    flex: 1,
    /* paddingLeft: 55, */
  },
  scrollView: {
    flex: 1,
  },
  verticalLine: {
    backgroundColor: '#7d7d7d69',
    width: 0.5,
  },
})
