/* eslint-disable react-native/no-inline-styles */
// import { addTodo, TodoModel } from '@/features/todo/todoSlice'
import { addTodo } from 'app/features/todo/todosSlice'
import { ICalendarState } from 'app/models/reducers/calendar'
import { RootState } from 'app/store/store'
import { Colors } from 'app/Theme/Variables'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button, IconButton, useTheme } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'

interface IState {
  calendarReducer: ICalendarState;
}


export const TodoInput = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  const [inputValue, setInputValue] = useState('')
  const [checkEnable, setCheckEnable] = useState<undefined | boolean>(false)
  const selectedDate = useSelector(
    (state: RootState) => new Date(state.calendar.selectedDate),
  )
  const handleHeadingSelect = (text: string) => {
    setInputValue(inputValue.concat(text))
  }

  const handleEmphasisSelect = (emphasis: string) => {
    setInputValue(inputValue.concat(emphasis))
  }


  const onPress = () => {
    if (inputValue.length > 1) {
      dispatch(
        addTodo({
          text: inputValue, isDone: checkEnable ? false : undefined, addedOn: selectedDate.toDateString()
        }),
      )
    }
    setInputValue('')
  }

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        {/* <IconButton
          animated
          onPress={() => setCheckEnable(!checkEnable)}
          icon={checkEnable ? 'sticker-check' : 'sticker-check-outline'}
        /> */}
        {/* <EmphasisMenu
          onEmphasisSelect={emphasisType => handleEmphasisSelect(emphasisType)}
        />
        <FormatMenu
          onHeadingSelect={menuItem => handleHeadingSelect(menuItem)}
        /> */}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          backgroundColor: theme.colors.background,
          borderRadius: 12,
          alignContent: 'center',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <IconButton
          animated
          onPress={() => setCheckEnable(!checkEnable)}
          icon={checkEnable ? 'sticker-check' : 'sticker-check-outline'}
        />

        <TextInput
          placeholder={'What is your plan today?'}
          placeholderTextColor={theme.colors.placeholder}
          multiline={true}
          value={inputValue}
          autoCapitalize={'sentences'}
          autoCorrect
          style={[
            styles.input,
            {
              backgroundColor: theme.colors.background,
              color: theme.colors.text,
            },
          ]}
          onChangeText={text => setInputValue(text)}
        />
        <View
          style={{
            borderTopEndRadius: 12,
            borderBottomEndRadius: 12,
            backgroundColor: Colors.primary,
            alignItems: 'center',
          }}
        >
          <Button
            color={theme.colors.text}
            mode="text"
            style={styles.add}
            labelStyle={{
              textAlign: 'center',
              alignItems: 'center',
              textAlignVertical: 'center',
              alignSelf: 'center',
            }}
            contentStyle={{
              flex: 1,
            }}
            onPress={onPress}
          >
            Add
          </Button>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondary,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    elevation: 8,
    padding: 8,
  },
  options: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  input: {
    flex: 1,
    borderRadius: 12,
    maxHeight: 76,
  },
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  add: {
    fontWeight: 'bold',
    color: Colors.text,
    flex: 1,
  },
  icon: {
    padding: 4,
  },
})
