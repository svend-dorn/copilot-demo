function calculateDaysBetweenDates(startDate, endDate) {
  const start = moment(startDate);
  const end = moment(endDate);
  return end.diff(start, 'days');
}

// Path: src/demo.spec.js

import { calculateDaysBetweenDates } from './demo';

