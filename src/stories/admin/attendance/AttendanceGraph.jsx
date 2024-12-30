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

const calculateStats = (data) => {
  if (!data || data.length === 0) return null;
  
  const totalCheckins = data.reduce((sum, day) => sum + day.count, 0);
  const avgCheckins = totalCheckins / data.length;
  
  // Sort days by count to find busiest days
  const sortedDays = [...data].sort((a, b) => b.count - a.count);
  const busiestDays = sortedDays.slice(0, 3).map(day => ({
    date: format(new Date(day._id), 'MMM d, yyyy'),
    count: day.count
  }));

  return {
    totalCheckins,
    avgCheckins,
    busiestDays
  };
};

const AttendanceGraph = ({ data }) => {
  console.log('AttendanceGraph rendered with data:', data);

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
    console.log('Data changed, sorting data...');
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

  console.log('Final processed data:', finalData);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dayOfWeek = getDayOfWeek(label);
      return (
        <div className="bg-white p-3 shadow-lg rounded-lg border border-gray-200">
          <p className="text-sm text-gray-600">{format(parseISO(label), 'MMM d, yyyy')}</p>
          <p className="font-medium text-gray-900">{dayOfWeek}</p>
          <p className="text-lg font-bold text-Navy">{payload[0].value} attendees</p>
        </div>
      );
    }
    return null;
  };

  const handleWeekdayChange = (event) => {
    setSelectedWeekday(event.target.value);
  };

  const handleDateRangeChange = (months, label) => {
    const date = new Date();
    date.setMonth(date.getMonth() - months);
    setStartDate(date);
    setActiveRange(label);
  };

  if (!finalData || finalData.length === 0) {
    console.log('No data to display');
    return (
      <div className="p-4 sm:p-6 bg-white rounded-lg shadow">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Attendance Report</h2>
        <p className="text-gray-600">No attendance data available for the selected period.</p>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Attendance Report</h2>

      {/* Date Range Controls - Horizontal scrolling on mobile */}
      <div className="mb-4 sm:mb-6">
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2">
          <button
            className={`text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all ${
              activeRange === '1 Month' ? 'bg-Navy text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleDateRangeChange(1, '1 Month')}
          >
            1M
            <span className="hidden sm:inline"> Month</span>
          </button>
          <button
            className={`text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all ${
              activeRange === '3 Months' ? 'bg-Navy text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleDateRangeChange(3, '3 Months')}
          >
            3M
            <span className="hidden sm:inline"> Months</span>
          </button>
          <button
            className={`text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all ${
              activeRange === '6 Months' ? 'bg-Navy text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleDateRangeChange(6, '6 Months')}
          >
            6M
            <span className="hidden sm:inline"> Months</span>
          </button>
          <button
            className={`text-sm sm:text-base px-3 sm:px-4 py-2 rounded-lg transition-all ${
              activeRange === '12 Months' ? 'bg-Navy text-white' : 'bg-gray-100 hover:bg-gray-200'
            }`}
            onClick={() => handleDateRangeChange(12, '12 Months')}
          >
            12M
            <span className="hidden sm:inline"> Months</span>
          </button>
        </div>
      </div>

      {/* Filters - Stack on mobile */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:mb-6">
        <div className="w-full sm:w-auto sm:flex-1 min-w-[200px]">
          <label className="block text-sm font-medium text-gray-600 mb-1">Filter by Class Day</label>
          <select
            value={selectedWeekday}
            onChange={handleWeekdayChange}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg"
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

        <div className="w-full sm:w-auto sm:flex-1 space-y-4 sm:space-y-0 sm:flex sm:gap-4">
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-gray-600 mb-1">Start Date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              maxDate={endDate}
            />
          </div>
          <div className="w-full sm:w-1/2">
            <label className="block text-sm font-medium text-gray-600 mb-1">End Date</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              minDate={startDate}
              maxDate={new Date()}
            />
          </div>
        </div>
      </div>

      {/* Graph - Adjust height for mobile */}
      <div style={{ width: '100%', height: 300 }} className="sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          {selectedWeekday === 'All' ? (
            <BarChart 
              data={finalData}
              margin={{ top: 20, right: 5, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="_id"
                tickFormatter={(str) => format(parseISO(str), 'MMM d')}
                height={50}
                angle={-45}
                textAnchor="end"
                interval="preserveStartEnd"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                width={35}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="count" 
                fill="#1E40AF"
                radius={[4, 4, 0, 0]}
                maxBarSize={50}
              />
            </BarChart>
          ) : (
            <LineChart 
              data={finalData}
              margin={{ top: 20, right: 5, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis 
                dataKey="_id"
                tickFormatter={(str) => format(parseISO(str), 'MMM d')}
                height={50}
                angle={-45}
                textAnchor="end"
                interval="preserveStartEnd"
                tick={{ fontSize: 12 }}
              />
              <YAxis 
                width={35}
                tick={{ fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="#1E40AF" 
                strokeWidth={2}
                dot={{ fill: '#1E40AF', r: 3 }}
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          )}
        </ResponsiveContainer>
      </div>

      {finalData && finalData.length > 0 && (
        <div className="mt-6 bg-gray-50 rounded-lg p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Summary Statistics</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Total Check-ins */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Total Check-ins</div>
              <div className="text-2xl font-bold text-Navy">
                {calculateStats(finalData)?.totalCheckins || 0}
              </div>
            </div>
            
            {/* Average per Day */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Average per Day</div>
              <div className="text-2xl font-bold text-Navy">
                {calculateStats(finalData)?.avgCheckins.toFixed(1) || 0}
              </div>
            </div>
            
            {/* Busiest Days */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="text-sm text-gray-600">Busiest Days</div>
              <div className="mt-1">
                {calculateStats(finalData)?.busiestDays.map((day, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-semibold text-Navy">{day.count}</span>
                    <span className="text-gray-600"> on {day.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

AttendanceGraph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default AttendanceGraph;
