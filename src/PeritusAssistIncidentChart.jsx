import React from "react";
import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

// data is hard-coded as an example, could easily be fetched via web request:
const exampleData = {
  response: {
    status: 200
  },
  data: [
    {
      name: "0",
      "Total Incidents": 48,
      Peritus: 0,
      "Non Peritus": 48
    },
    {
      name: "1",
      "Total Incidents": 46,
      Peritus: 0,
      "Non Peritus": 46
    },
    {
      name: "2",
      "Total Incidents": 50,
      Peritus: 0,
      "Non Peritus": 45
    },
    {
      name: "3",
      "Total Incidents": 60,
      Peritus: 5,
      "Non Peritus": 55
    },
    {
      name: "4",
      "Total Incidents": 80,
      Peritus: 40,
      "Non Peritus": 40
    },
    {
      name: "5",
      "Total Incidents": 85,
      Peritus: 60,
      "Non Peritus": 25
    },
    {
      name: "6",
      "Total Incidents": 85,
      Peritus: 60,
      "Non Peritus": 25
    },
    {
      name: "7",
      "Total Incidents": 87,
      Peritus: 62,
      "Non Peritus": 25
    },
    {
      name: "8",
      "Total Incidents": 87,
      Peritus: 70,
      "Non Peritus": 17
    },
    {
      name: "9",
      "Total Incidents": 95,
      Peritus: 80,
      "Non Peritus": 15
    },
    {
      name: "10",
      "Total Incidents": 85,
      Peritus: 80,
      "Non Peritus": 5
    },
    {
      name: "11",
      "Total Incidents": 98,
      Peritus: 94,
      "Non Peritus": 4
    }
  ]
};

const totalIncidents = exampleData.data.reduce((total, dataPoint) => {
  return total + dataPoint["Total Incidents"];
}, 0);

const peritusIncidents = exampleData.data.reduce((total, dataPoint) => {
  return total + dataPoint.Peritus;
}, 0);

export default function PeritusAssistIncidentChart() {
  return (
    <div style={{ padding: 20, backgroundColor: "#2D3034" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h5>PERITUS ASSISTED INCIDENTS</h5>
        <h5 style={{ color: "#FE7626" }}>Weekly v</h5>
      </div>
      <hr
        style={{
          border: "0.5px solid",
          color: "#383B3F",
          marginLeft: -20,
          marginRight: -20
        }}
      />
      <h4>{((peritusIncidents / totalIncidents) * 100).toFixed(2)}%</h4>
      <h6>
        {peritusIncidents} / {totalIncidents}
      </h6>

      <BarChart
        width={700}
        height={250}
        data={exampleData.data}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20
        }}
        barCategoryGap={13}
      >
        <defs>
          <linearGradient id="colorPeritus" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#c034f7" stopOpacity={1} />
            <stop offset="95%" stopColor="#26d3fc" stopOpacity={1} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#4E5054" vertical={false} />
        <Tooltip />
        <Legend />
        <XAxis dataKey="name" />
        <YAxis />
        <Bar
          type="monotone"
          dataKey="Peritus"
          stackId="a"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorPeritus)"
        />
        {/* #5772F8 */}
        <Bar dataKey="Non Peritus" stackId="a" fill="#FDBE02" />
      </BarChart>
    </div>
  );
}
