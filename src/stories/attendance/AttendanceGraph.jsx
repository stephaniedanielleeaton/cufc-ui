import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { parseISO, format } from 'date-fns';

const generateDateRangeWithZeroCounts = (data, startDate, endDate) => {
  const result = [];
  let currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    const dateString = currentDate.toISOString().split('T')[0];
    const foundEntry = data.find(entry => entry._id === dateString);

    result.push({
      _id: dateString,
      count: foundEntry ? foundEntry.count : 0
    });

    currentDate.setDate(currentDate.getDate() + 1);
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
    date.setMonth(date.getMonth() - 3);
    return date;
  });

  const [endDate, setEndDate] = useState(new Date());
  const [sortedData, setSortedData] = useState([]);
  const [selectedWeekday, setSelectedWeekday] = useState('All');
  const [activeRange, setActiveRange] = useState('3 Months');

  useEffect(() => {
    const sorted = [...data].sort((a, b) => new Date(a._id) - new Date(b._id));
    setSortedData(sorted);
  }, [data]);

  const filterDataByWeekday = (data, weekday) => {
    if (weekday === 'All') return data;
    return data.filter((entry) => getDayOfWeek(entry._id) === weekday);
  };


  const filteredDataBySelectedDateRange = sortedData.filter((entry) => {
    const entryDate = new Date(entry._id);
    return entryDate >= startDate && entryDate <= endDate;
  });

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

  const handleDateRangeChange = (months, label) => {
    setStartDate(new Date(new Date().setMonth(new Date().getMonth() - months)));
    setActiveRange(label);
  };

  return (
    <div className="p-4 bg-white">
      <h2 className="text-2xl font-bold mb-4">Attendance Report</h2>

      {/* Buttons to adjust date range */}
      <div className="flex flex-wrap space-y-2 sm:space-y-0 sm:space-x-2 mb-4">
        <button
          className={`w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-200 transition ${activeRange === '1 Month' ? 'bg-MediumPink text-white' : 'border-gray-800 text-gray-800'}`}
          onClick={() => handleDateRangeChange(1, '1 Month')}
        >
          Last 1 Month
        </button>
        <button
          className={`w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-200 transition ${activeRange === '3 Months' ? 'bg-MediumPink text-white' : 'border-gray-800 text-gray-800'}`}
          onClick={() => handleDateRangeChange(3, '3 Months')}
        >
          Last 3 Months
        </button>
        <button
          className={`w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-200 transition ${activeRange === '6 Months' ? 'bg-MediumPink text-white' : 'border-gray-800 text-gray-800'}`}
          onClick={() => handleDateRangeChange(6, '6 Months')}
        >
          Last 6 Months
        </button>
        <button
          className={`w-full sm:w-auto px-4 py-2 border rounded hover:bg-gray-200 transition ${activeRange === '12 Months' ? 'bg-MediumPink text-white' : 'border-gray-800 text-gray-800'}`}
          onClick={() => handleDateRangeChange(12, '12 Months')}
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
          className="border p-2 rounded w-full sm:w-auto"
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
      <div className="flex flex-wrap sm:flex-nowrap space-y-2 sm:space-y-0 sm:space-x-4 mb-4">
        <div className="w-full sm:w-auto">
          <label className="block text-sm font-bold mb-2">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            className="border rounded p-2 w-full sm:w-auto"
            maxDate={new Date()}
          />
        </div>

        <div className="w-full sm:w-auto">
          <label className="block text-sm font-bold mb-2">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            className="border rounded p-2 w-full sm:w-auto"
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
              top: 10, right: 10, left: -10, bottom: 0,
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
      _id: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired
    })
  ).isRequired
};

export default AttendanceGraph;
