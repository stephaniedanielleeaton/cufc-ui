import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO, format } from 'date-fns';

// Function to generate an array of dates between two dates, filling missing ones with count 0
const generateDateRangeWithZeroCounts = (data, startDate, endDate) => {
  const result = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    const foundEntry = data.find(entry => entry._id === dateString);

    result.push({
      _id: dateString,
      count: foundEntry ? foundEntry.count : 0 // If date not found in original data, set count to 0
    });

    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
  }

  return result;
};

// Function to get the day of the week from a date string using date-fns
const getDayOfWeek = (dateString) => {
  const date = parseISO(dateString); // Parse the ISO date string
  return format(date, 'EEEE'); // Format the parsed date to show the day of the week
};

// Tailwind classes are used for styling
const AttendanceGraph = ({ data }) => {
  // Initialize startDate to be 3 months before today's date
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 3); // Set the date to 3 months ago
    return date;
  });

  // Initialize endDate to today
  const [endDate, setEndDate] = useState(new Date());

  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Sort data by date in ascending order (older dates on the left)
    const sorted = [...data].sort((a, b) => new Date(a._id) - new Date(b._id));
    setSortedData(sorted);
  }, [data]);

  // Helper function to check if a date is within the range of startDate and endDate
  const isDateWithinRange = (dateString) => {
    const entryDate = new Date(dateString);
    return entryDate >= startDate && entryDate <= endDate;
  };

  // Filter data based on the selected date range
  const filteredData = sortedData.filter((entry) => isDateWithinRange(entry._id));

  // Generate the full date range with zero counts for missing dates
  const fullDataWithZeros = generateDateRangeWithZeroCounts(filteredData, startDate, endDate);

  // Helper function to set date range using buttons
  const setDateRange = (monthsAgo) => {
    const start = new Date();
    start.setMonth(start.getMonth() - monthsAgo);
    setStartDate(start);
    setEndDate(new Date()); // Set endDate to today
  };

  // Custom tooltip to display the day of the week and the date
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dayOfWeek = getDayOfWeek(label); // Get day of the week for the hovered date
      return (
        <div className="bg-white p-2 shadow-lg rounded">
          <p>{`${dayOfWeek}, ${label}`}</p>
          <p>{`Count: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance Over Time</h2>

      {/* Buttons to adjust date range */}
      <div className="flex space-x-2 mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setDateRange(1)}
        >
          Last 1 Month
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setDateRange(3)}
        >
          Last 3 Months
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setDateRange(6)}
        >
          Last 6 Months
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setDateRange(12)}
        >
          Last 12 Months
        </button>
      </div>

      {/* Date Pickers */}
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-2">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border rounded p-2"
            maxDate={new Date()} // Prevent selecting a future start date
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border rounded p-2"
            minDate={startDate} // Prevent selecting an end date before the start date
            maxDate={new Date()} // End date cannot be in the future
          />
        </div>
      </div>

      {/* Bar Graph */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={fullDataWithZeros}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" tickFormatter={(str) => str.slice(5)} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="count" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Define PropTypes
AttendanceGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,  // Date in string format (e.g., "2024-05-26")
      count: PropTypes.number.isRequired // Count of attendance for that day
    })
  ).isRequired
};

export default AttendanceGraph;
