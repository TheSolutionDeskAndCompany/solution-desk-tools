import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

function App() {
  const [data, setData] = useState([
    { category: "A", value: 20 },
    { category: "B", value: 10 },
    { category: "C", value: 8 },
    { category: "D", value: 4 },
  ]);
  const [input, setInput] = useState("");

  function handleInputChange(e) {
    setInput(e.target.value);
    const lines = e.target.value.split("\n");
    const rows = lines
      .map((line) => line.split(","))
      .filter((arr) => arr.length === 2 && arr[1] && !isNaN(arr[1]));
    setData(rows.map(([category, value]) => ({ category, value: Number(value) })));
  }

  return (
    <div style={{ maxWidth: 600, margin: "0 auto", padding: 20 }}>
      <h1>Pareto Chart Generator</h1>
      <p>Paste your data (Category,Value, one per line):</p>
      <textarea
        rows={5}
        style={{ width: "100%" }}
        placeholder="A,20\nB,10\nC,8"
        value={input}
        onChange={handleInputChange}
      />
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <p>Copy-paste CSV like:<br/>A,20<br/>B,10<br/>C,8</p>
    </div>
  );
}

export default App;
