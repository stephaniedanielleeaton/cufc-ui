import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

// Tailwind classes are used for styling
const AttendanceGraph = ({ data }) => {
  const [monthsToShow, setMonthsToShow] = useState(3); // Default to showing 3 months
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    // Sort data by date in ascending order (older dates on the left)
    const sorted = [...data].sort((a, b) => new Date(a._id) - new Date(b._id));
    setSortedData(sorted);
  }, [data]);

  // Helper function to check if a date is within the range of months
  const isDateWithinRange = (dateString, months) => {
    const entryDate = new Date(dateString);
    const cutoffDate = new Date();
    cutoffDate.setMonth(cutoffDate.getMonth() - months);
    return entryDate >= cutoffDate;
  };

  // Filter data based on the selected number of months
  const filteredData = sortedData.filter((entry) => isDateWithinRange(entry._id, monthsToShow));

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance Over Time</h2>

      {/* Buttons to adjust date range */}
      <div className="flex space-x-2 mb-4">
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${monthsToShow === 1 && 'bg-blue-700'}`}
          onClick={() => setMonthsToShow(1)}
        >
          Last 1 Month
        </button>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${monthsToShow === 3 && 'bg-blue-700'}`}
          onClick={() => setMonthsToShow(3)}
        >
          Last 3 Months
        </button>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${monthsToShow === 6 && 'bg-blue-700'}`}
          onClick={() => setMonthsToShow(6)}
        >
          Last 6 Months
        </button>
        <button
          className={`px-4 py-2 bg-blue-500 text-white rounded ${monthsToShow === 12 && 'bg-blue-700'}`}
          onClick={() => setMonthsToShow(12)}
        >
          Last 12 Months
        </button>
      </div>

      {/* Graph */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={filteredData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" tickFormatter={(str) => str.slice(5)} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
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
