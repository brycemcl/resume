import { format } from 'date-fns'

export const now = new Date()
export const datesToString = {
  _current: function (date: Date) {
    if (date === now) {
      return 'Present'
    }
  },
  month: function (date: Date): string {
    return this._current(date) || format(date, 'MMMM yyyy')
  },
  year: function (date: Date): string {
    return this._current(date) || format(date, 'yyyy')
  },
}
