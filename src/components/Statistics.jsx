import { useEffect, useState } from "react";

import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ahsanul-database/fakeDB/main/marksss.json")
      .then((res) => res.json())
      .then((data) => setdata(data));
  }, []);
  return (
    <div className="">
      <h1 className="text-3xl text-center py-8">
        Total data: {data.length}{" "}
      </h1>
      <div className="flex justify-center overflow-x-auto object-cover">

        <ComposedChart
        // width={400}
          width={800}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="id" scale="band" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="obtain" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="obtain" stroke="#ff7300" />
        </ComposedChart>
      </div>
    </div>
  );
};

export default Statistics;
