import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedDate: new Date().toISOString(),
}

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setSelectedCalendarDate: (state, action) => {
      state.selectedDate = action.payload
    },
  },
})

export const { setSelectedCalendarDate } = calendarSlice.actions

export default calendarSlice.reducer
