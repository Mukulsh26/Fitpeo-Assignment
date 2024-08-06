import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 1, amount: 4000 },
  { date: 2, amount: 3000 },
  { date: 3, amount: 2000 },
  { date: 4, amount: 2780 },
  { date: 5, amount: 1890 },
  { date: 6, amount: 2390 },
  { date: 7, amount: 3490 },
  { date: 8, amount: 1400 },
  { date: 9, amount: 5900 },
  { date: 10, amount: 1100 },
  { date: 11, amount: 8700 },
  { date: 12, amount: 9200 },
  { date: 13, amount: 4300 },
  { date: 14, amount: 5700 },
  { date: 15, amount: 6700 },
  { date: 16, amount: 2500 },
  { date: 17, amount: 3600 },
  { date: 18, amount: 4900 },
  { date: 19, amount: 5200 },
  { date: 20, amount: 5800 },
  { date: 21, amount: 4000 },
  { date: 22, amount: 5000 },
  { date: 23, amount: 3000 },
  { date: 24, amount: 4000 },
  { date: 25, amount: 3000 },
  { date: 26, amount: 4502 },
  { date: 27, amount: 4562 },
  { date: 28, amount: 7000 },
  { date: 29, amount: 4500 },
  { date: 30, amount: 9000 },
];
const formatYAxis = (tickItem) => {
    return `${tickItem / 1000}k`;
  };
  const CustomXAxisTick = ({ x, y, payload }) => {
    // List of desired tick values
    const tickValues = [5, 10, 15, 20, 25, 30];
    if (tickValues.includes(payload.value)) {
      return (
        <text x={x} y={y + 15} textAnchor="middle" fill="#67686e" fontFamily="Inter" fontWeight="400">
          {payload.value}
        </text>
      );
    }
    return null;
  };
const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;
  const radius = 10; // Adjust the radius as needed
  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      fill={fill}
      rx={radius}
      ry={radius}
    />
  );
};

const BarGraph = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      data={data}
      margin={{
        top: 20, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="0" vertical={false}/>
      <XAxis dataKey="date"  tick={<CustomXAxisTick />} style={{ fill: '#67686e', fontFamily:"Inter", fontWeight:"400"}} />
      <YAxis tickFormatter={formatYAxis} style={{ fill: '#67686e', fontFamily:"Inter" , fontWeight:"400"}}/>
      <Tooltip />
      <Legend />
      <Bar dataKey="amount" fill="#7394ff" shape={<CustomBar />} />
    </BarChart>
  </ResponsiveContainer>
);

export default BarGraph;
