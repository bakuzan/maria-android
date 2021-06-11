import formatDateForDisplay from './formatDateForDisplay';

export default function offsetCalculator(
  daysOffset: number | null | undefined
) {
  if (!daysOffset || isNaN(daysOffset) || daysOffset === 0) {
    return '';
  }

  const d = new Date();
  d.setDate(d.getDate() + daysOffset);

  return formatDateForDisplay(d);
}
