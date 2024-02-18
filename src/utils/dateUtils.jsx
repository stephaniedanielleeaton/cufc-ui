import { instance } from 'eslint-plugin-react/lib/util/lifecycleMethods.js';

export const formatDate = (date) => {
  if (!date) return ''; // Handle undefined date gracefully
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const day = date.getUTCDate();
  const month = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();
  return `${month} ${day}, ${year}`;
};

export const convertUTCDateToYYYYMMDD = (utcDate) => {
  if (utcDate === null) {
    return '';
  }
  if (utcDate === String) {
    return utcDate;
  }
  const date = new Date(utcDate);
  const year = String(date.getUTCFullYear());
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Adding 1 because getUTCMonth() returns 0-based index
  const day = String(date.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export const calculateValidUntilDate = (membershipRenewalDate, months) => {
  // Get the year, month, and day of the original date in UTC
  let year = membershipRenewalDate.getUTCFullYear();
  let month = membershipRenewalDate.getUTCMonth();
  let day = membershipRenewalDate.getUTCDate();

  // Calculate the new month and year after adding the specified number of months
  month += +months;
  year += Math.floor(month / 12);
  month %= 12;

  // Handle cases where month becomes negative or greater than 11
  if (month < 0) {
    month += 12;
    year--;
  }

  // Get the number of days in the new month
  const daysInNewMonth = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();

  // Adjust the day if it's greater than the number of days in the new month
  day = Math.min(day, daysInNewMonth);

  // Return the new date in UTC
  return new Date(Date.UTC(year, month, day));
}
