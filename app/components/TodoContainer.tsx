import { RootState } from 'app/store/store'
import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Surface, Text } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { Todo } from './Todo'
import LottieView from "lottie-react-native";


function TodoContainer() {
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate),
  )
  const todoList = useSelector((state: RootState) => state.todo)?.filter(
    todo =>
      new Date(todo.timestamp).toDateString() === selectedDate.toDateString(),
  )
  console.log("todoList", todoList)
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
            flexDirection: "column",
            alignContent: 'space-between',
            // alignItems: 'center',
          }}
        >
          <LottieView
            source={require('../assets/empty_todo.json')}
            autoPlay
            loop
          />
          <Text
            style={{
              textAlignVertical: "bottom",
              fontSize: 20,
              paddingBottom: 16,
              flex: 2,
              textAlign: 'center',
            }}
          >
            Plan your work and work your plan.
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
    marginBottom: 70,
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
