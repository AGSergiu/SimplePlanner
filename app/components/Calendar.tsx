import DateTimePicker, {
  DateTimePickerEvent
} from '@react-native-community/datetimepicker'
import { setSelectedCalendarDate } from 'app/features/calendar/calendarSlice'
import { RootState } from 'app/store/store'
import { Colors, FontSize } from 'app/Theme/Variables'
import { toShortDate } from 'app/utils/utils'
import moment from 'moment'
import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import { useDispatch, useSelector } from 'react-redux'

type OwnProps = {
  selectedDate: Date
  onSelectedDate: (date: Date) => void
}

export default function Calendar() {
  const dispatch = useDispatch()
  const [selectedDate, setSelectedDate] = React.useState<moment.Moment>(moment())
  const [showDatePicker, setShowDatePicker] = useState(false)
  const todoDates: string[] = useSelector((state: RootState) => state.todo).map(
    todo => {
      console.log("addedOn", todo.addedOn)
      return todo.addedOn
    },
  )
  const onSelectDate = (date: moment.Moment) => {
    setSelectedDate(date)
    dispatch(setSelectedCalendarDate(date.toJSON()))
  }

  function handleToday() {
    onSelectDate(moment())
  }

  const onHeaderSelected = () => {
    setShowDatePicker(true)
  }

  let markedDates: { date: string; dots: { color: string }[] }[] =
    getMarkedDates([...new Set(todoDates)])

  const handleDatePicker = (selectedDate: Date | undefined) => {
    setShowDatePicker(false)
    if (selectedDate) {
      onSelectDate(moment(selectedDate))
    }
  }

  return (
    <View style={{}}>
      <CalendarStrip
        scrollable
        daySelectionAnimation={{
          type: 'background',
          duration: 30,
          highlightColor: Colors.white,
        }}
        style={styles.calendar}
        calendarHeaderStyle={styles.calendarDate}
        onHeaderSelected={() => onHeaderSelected()}
        dateNumberStyle={styles.calendarText}
        dateNameStyle={styles.calendarText}
        selectedDate={selectedDate}
        upperCaseDays
        markedDates={markedDates}
        dayComponentHeight={70}
        dayContainerStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, borderRadius: 0, width: "110%" }}
        onDateSelected={date => {
          onSelectDate(date)
        }}
      />

      <View style={styles.todayContainer}>
        <Pressable onPress={() => handleToday()}>
          <Text style={styles.today}>Today</Text>
        </Pressable>
      </View>

      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={selectedDate.toDate()}
          mode={'date'}
          display={'default'}
          style={{ backgroundColor: Colors.primary }}
          is24Hour={true}
          textColor={Colors.primary}
          onChange={(_event, date) => { handleDatePicker(date) }}
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

function getMarkedDates(onlyUnique: string[]) {

  let markedDates: { date: string; dots: { color: string }[] }[] = []
  console.log("addedOn", onlyUnique)

  if (onlyUnique) {
    onlyUnique.map(todoDate => {
      let todoMark = {
        date: todoDate,
        dots: [{ color: '#3F51B5' }],
      }
      markedDates.push(todoMark)
    })
  }
  return markedDates
}
