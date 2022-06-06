/**
 * Loading reducer made separate for easy blacklisting
 * Avoid data persist
 */
import createReducer from 'app/lib/createReducer';
import * as types from 'app/store/actions/types';

import { ICalendarState } from './../../models/reducers/calendar';
import { ICalendarAction } from './../../models/actions/calendar';

const initialState: ICalendarState = {
  selectedDate: new Date().toISOString()
}

export const calendarReducer = createReducer(initialState, {
  [types.CALENDAR_SET_DATE](state: ICalendarState, action: ICalendarAction) {
    return { ...state, selectedDate: action.setSelectedCalendarDate };
  }
})