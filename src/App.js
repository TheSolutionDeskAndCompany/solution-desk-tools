import React, { useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { category: "A", value: 20 },
    { category: "B", value: 10 },
    { category: "C", value: 8 },
    { category: "D", value: 4 },
  ]);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const chartRef = useRef();

  function handleInputChange(e) {
    setInput(e.target.value);
    const lines = e.target.value.split("\n");
    const rows = lines
      .map((line) => line.split(","))
      .filter((arr) => arr.length === 2 && arr[1] && !isNaN(arr[1]));
    if (lines.length && rows.length !== lines.filter(l => l.trim()).length) {
      setError("Please check your input format: each line must be 'Category,Value'");
    } else {
      setError("");
    }
    setData(rows.map(([category, value]) => ({ category, value: Number(value) })));
  }

  function handleDownload() {
    html2canvas(chartRef.current).then((canvas) => {
      const link = document.createElement("a");
      link.download = "pareto-chart.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  return (
    <div className="container">
      <h1>Pareto Chart Generator</h1>
      <p>Paste your data (Category,Value, one per line):</p>
      <textarea
        rows={5}
        placeholder="A,20\nB,10\nC,8"
        value={input}
        onChange={handleInputChange}
      />
      {error && <p style={{color:"red"}}>{error}</p>}
      <button onClick={handleDownload}>Download Chart as Image</button>
      <h2>Pareto Chart</h2>
      <div ref={chartRef}>
        <BarChart width={Math.min(500, window.innerWidth - 60)} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" label={{ value: "Category", position: "insideBottom", dy: 15 }} />
          <YAxis label={{ value: "Value", angle: -90, position: "insideLeft", dx: -10 }} />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
      <p>Copy-paste CSV like:<br/>A,20<br/>B,10<br/>C,8</p>
    </div>
  );
}

export default App;
