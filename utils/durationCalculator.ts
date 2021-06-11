import daysBetweenDates from './daysBetweenDates';
import formatDuration from './formatDuration';
import formatDateForDisplay from './formatDateForDisplay';

export default function durationCalculator(
  dayFromInput: Date,
  dayToInput: Date
) {
  const from = new Date(dayFromInput);
  const to = new Date(dayToInput);

  const isInvalidFrom = from.toString() === 'Invalid Date';
  const isInvalidTo = to.toString() === 'Invalid Date';

  if (isInvalidFrom || isInvalidTo) {
    return '';
  }

  const days = daysBetweenDates(from, to);
  const diff = formatDuration(days);

  return diff;
}
