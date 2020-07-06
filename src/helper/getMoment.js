import moment from 'moment-timezone/moment-timezone';

// Show moment - Date and time
export const getMoment = (value) => {
  return moment.utc(value).format("MMM Do YY")
}