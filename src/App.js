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
  const [isDarkTheme, setIsDarkTheme] = useState(false);
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
    <div className={`container ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="header">
        <h1>Pareto Chart Generator</h1>
        <button 
          className="theme-toggle"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          title={isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDarkTheme ? '☀️' : '🌙'}
        </button>
      </div>
      <p>Paste your data (Category,Value, one per line):</p>
      <button
        onClick={() => setInput("A,20\nB,10\nC,8\nD,4")}
        style={{ marginBottom: "10px", background: "#e7e7ff", color: "#444" }}
      >
        Fill with Example Data
      </button>
      <textarea
        rows={5}
        placeholder="A,20\nB,10\nC,8"
        value={input}
        onChange={handleInputChange}
      />
      {error && <p style={{color:"red"}}>{error}</p>}
      {data.length > 0 && (
        <>
          <button onClick={handleDownload}>Download Chart as Image</button>
          <h2>Pareto Chart</h2>
          <div className="chart-container" ref={chartRef}>
            <BarChart 
              width={Math.min(500, window.innerWidth - 60)} 
              height={350} 
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="category" 
                label={{ value: "Category", position: "insideBottom", offset: -10 }} 
              />
              <YAxis 
                label={{ value: "Value", angle: -90, position: "insideLeft" }} 
              />
              <Tooltip />
              <Bar dataKey="value" fill={isDarkTheme ? "#8b8bff" : "#8884d8"} />
            </BarChart>
          </div>
        </>
      )}
      <p>Copy-paste CSV like:<br/>A,20<br/>B,10<br/>C,8</p>
    </div>
  );
}

export default App;
