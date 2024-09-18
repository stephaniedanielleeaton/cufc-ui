import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
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


const getDayOfWeek = (dateString) => {
  const date = parseISO(dateString);
  return format(date, 'EEEE');
};

const AttendanceGraph = ({ data }) => {
  const [startDate, setStartDate] = useState(() => {
    const date = new Date();
    date.setMonth(date.getMonth() - 3); // Set the date to 3 months ago
    return date;
  });

  const [endDate, setEndDate] = useState(new Date());
  const [sortedData, setSortedData] = useState([]);
  const [selectedWeekday, setSelectedWeekday] = useState('All'); // Default to "All"

  useEffect(() => {
    const sorted = [...data].sort((a, b) => new Date(a._id) - new Date(b._id));
    setSortedData(sorted);
  }, [data]);

  const filterDataByWeekday = (data, weekday) => {
    if (weekday === 'All') return data; // If "All", return the unfiltered data
    return data.filter((entry) => getDayOfWeek(entry._id) === weekday);
  };


  const filteredDataBySelectedDateRange = sortedData.filter((entry) => {
    const entryDate = new Date(entry._id);
    return entryDate >= startDate && entryDate <= endDate;
  });

  // Generate the full date range with zero counts for missing dates
  const fullDataWithZeros = generateDateRangeWithZeroCounts(filteredDataBySelectedDateRange, startDate, endDate);

  const finalData = filterDataByWeekday(fullDataWithZeros, selectedWeekday);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dayOfWeek = getDayOfWeek(label);
      return (
        <div className="bg-white p-2 shadow-lg rounded">
          <p>{`${dayOfWeek}, ${label}`}</p>
          <p>{`Count: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  const handleWeekdayChange = (event) => {
    setSelectedWeekday(event.target.value);
  };

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance Over Time</h2>

      {/* Buttons to adjust date range */}
      <div className="flex space-x-2 mb-4">
        <button
          className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-200 transition"
          onClick={() => setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 1)))}
        >
          Last 1 Month
        </button>
        <button
          className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-200 transition"
          onClick={() => setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 3)))}
        >
          Last 3 Months
        </button>
        <button
          className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-200 transition"
          onClick={() => setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 6)))}
        >
          Last 6 Months
        </button>
        <button
          className="px-4 py-2 border border-gray-800 text-gray-800 rounded hover:bg-gray-200 transition"
          onClick={() => setStartDate(new Date(new Date().setMonth(new Date().getMonth() - 12)))}
        >
          Last 12 Months
        </button>
      </div>

      {/* Weekday Selector */}
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Select Weekday:</label>
        <select
          value={selectedWeekday}
          onChange={handleWeekdayChange}
          className="border p-2 rounded"
        >
          <option value="All">All Days</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </div>

      {/* Date Pickers */}
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block text-sm font-bold mb-2">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border rounded p-2"
            maxDate={new Date()}
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border rounded p-2"
            minDate={startDate}
            maxDate={new Date()}
          />
        </div>
      </div>

      {/* Render LineChart if a specific weekday is selected, otherwise render BarChart */}
      <ResponsiveContainer width="100%" height={400}>
        {selectedWeekday === 'All' ? (
          <BarChart
            data={finalData}
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
        ) : (
          <LineChart
            data={finalData}
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
        )}
      </ResponsiveContainer>
    </div>
  );
};


AttendanceGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,  // Date in string format (e.g., "2024-05-26")
      count: PropTypes.number.isRequired // Count of attendance for that day
    })
  ).isRequired
};

export default AttendanceGraph;
