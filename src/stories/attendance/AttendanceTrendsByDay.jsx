import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend,
} from 'recharts';

// Basic attendance trends component to display all data in a line chart
const AttendanceTrends = ({ data }) => {
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    // Sort data by date in ascending order
    const sortedData = [...data].sort((a, b) => new Date(a._id) - new Date(b._id));
    setProcessedData(sortedData);
  }, [data]);

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

  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Attendance Trends</h2>

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
