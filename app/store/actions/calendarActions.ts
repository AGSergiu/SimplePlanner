/*
 * Reducer actions related with Calendar
 */
import * as types from './types';

export function setCalendarSelectedDate(value: string) {
  return {
    type: types.CALENDAR_SET_DATE,
    selectedCalendarDate: value,
  }
}