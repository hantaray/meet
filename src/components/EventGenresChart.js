// src/components/CityEventsChart.js

import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend } from "recharts";

const EventGenresChart = ({ events }) => {
  const [data, setData] = useState([]);
  const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];

  useEffect(() => {
    setData(getData());
  }, [`${events}`]);

  const getData = () => {
    const data = genres.map(genre => {
      const filteredEvents = events.filter(event => event.summary.includes(genre));
      return {
        name: genre,
        value: filteredEvents.length
      }
    })
    return data;
  };

  // const data = [
  //   { name: "Group A", value: 500 },
  //   { name: "Group B", value: 500 },
  //   { name: "Group C", value: 300 },
  //   { name: "Group D", value: 200 }
  // ];

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          fill="#8884d8"
          labelLine={false}
          label
          outerRadius={130}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}

export { EventGenresChart };