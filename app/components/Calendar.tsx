import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import { IThemeState } from 'app/models/reducers/theme'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import { useDispatch, useSelector } from 'react-redux'
import * as calendarActions from 'app/store/actions/calendarActions'
import { Colors, FontSize } from 'app/Theme/Variables'
import { ICalendarState } from 'app/models/reducers/calendar'
import { ITodoState } from 'app/models/reducers/todo'

type OwnProps = {
  selectedDate: Date
  onSelectedDate: (date: Date) => void
}

interface IState {
  calendarReducer: ITodoState;
}


export default function Calendar() {
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = React.useState(new Date())
  const [showDatePicker, setShowDatePicker] = useState(false)
  /* const todoDates: string[] = useSelector((state: RootState) => state.todo).map(
    todo => toShortDate(todo.timestamp),
  ) */

  const onSelectDate = (date: Date) => {
    setSelectedDate(date)
    dispatch(calendarActions.setCalendarSelectedDate(date.toISOString()))
  }

  function handleToday() {
    onSelectDate(new Date())
  }

  const onHeaderSelected = () => {
    setShowDatePicker(true)
  }

  // function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index
  // }

  // let markedDates: { date: string; dots: { color: string }[] }[] =
  //   getMarkedDates(todoDates, onlyUnique)

  const handleDatePicker = (
    _event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    setShowDatePicker(false)
    if (selectedDate) {
      onSelectDate(selectedDate)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <CalendarStrip
        scrollable
        daySelectionAnimation={{
          type: 'background',
          duration: 30,
          highlightColor: Colors.primary,
        }}
        style={styles.calendar}
        calendarHeaderStyle={styles.calendarDate}
        onHeaderSelected={() => onHeaderSelected()}
        dateNumberStyle={styles.calendarText}
        dateNameStyle={styles.calendarText}
        selectedDate={selectedDate}
        upperCaseDays
        // markedDates={markedDates}
        dayComponentHeight={65}
        dayContainerStyle={{ borderRadius: 10 }}
        onDateSelected={date => onSelectDate(date.toDate())}
      />

      <View style={styles.todayContainer}>
        <Pressable onPress={() => handleToday()}>
          <Text style={styles.today}>Today</Text>
        </Pressable>
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate}
          mode={'date'}
          display={'default'}
          style={{ backgroundColor: Colors.primary }}
          is24Hour={true}
          textColor={Colors.primary}
          onChange={handleDatePicker}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  calendar: {
    height: 110,
    paddingTop: 10,

    backgroundColor: Colors.secondary,
  },
  calendarText: {
    color: Colors.text,
  },
  calendarDate: {
    color: Colors.text,
    alignSelf: 'flex-start',
    paddingStart: 8,
    fontSize: FontSize.regular,
  },
  todayContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  today: {
    fontSize: FontSize.xsmall,
    color: Colors.text,
    fontWeight: '500',
  },
})

function getMarkedDates(
  todoDates: string[],
  onlyUnique: (value: any, index: any, self: any) => boolean,
) {
  const todoDateUnique = todoDates.filter(onlyUnique)

  let markedDates: { date: string; dots: { color: string }[] }[] = []
  console.log(todoDateUnique)

  if (todoDateUnique) {
    todoDateUnique.map(todoDate => {
      let todoMark = {
        date: todoDate,
        dots: [{ color: '#3F51B5' }],
      }
      markedDates.push(todoMark)
    })
  }
  return markedDates
}
