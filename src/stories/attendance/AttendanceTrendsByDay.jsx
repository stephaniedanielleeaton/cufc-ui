import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

// Helper function to get the day of the week from a date string
const getDayOfWeek = (dateString) => {
  const date = new Date(dateString);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return daysOfWeek[date.getUTCDay()]; // Get day in UTC format
};

const AttendanceTrends = ({ data }) => {
  const [processedData, setProcessedData] = useState([]);
  const [selectedWeekday, setSelectedWeekday] = useState(''); // Default to empty (show all)

  useEffect(() => {
    // Sort data by date in ascending order
    let sortedData = [...data].sort((a, b) => new Date(a._id) - new Date(b._id));

    // If a weekday is selected, filter the data by the selected weekday
    if (selectedWeekday) {
      sortedData = sortedData.filter((item) => getDayOfWeek(item._id) === selectedWeekday);
    }

    setProcessedData(sortedData);
  }, [data, selectedWeekday]);

  // Custom tooltip for displaying date and attendance count
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-2 shadow-lg rounded">
          <p>{`${label}`}</p>
          <p>{`Attendance: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  // Handler for when the user selects a weekday
  const handleWeekdayChange = (event) => {
    setSelectedWeekday(event.target.value);
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance Trends</h2>

      {/* Dropdown for selecting the weekday */}
      <div className="mb-4">
        <label htmlFor="weekday-select" className="block text-gray-700 mb-2">
          Select a Weekday:
        </label>
        <select
          id="weekday-select"
          className="border p-2 rounded"
          value={selectedWeekday}
          onChange={handleWeekdayChange}
        >
          <option value="">All Days</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </div>

      {/* Line Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={processedData}
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="_id" tickFormatter={(str) => str.slice(5)} />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

// Define PropTypes
AttendanceTrends.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,  // Date in string format (e.g., "2024-05-26")
      count: PropTypes.number.isRequired // Count of attendance for that day
    })
  ).isRequired
};

export default AttendanceTrends;
