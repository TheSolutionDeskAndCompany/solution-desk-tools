import React, { useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toPng } from "html-to-image";
import { Link } from "react-router-dom";
import Logo from './components/Logo';
import "./App.css";

function ParetoChartTool() {
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

  function fillExampleData() {
    const exampleData = "Defect Type A,45\nDefect Type B,23\nDefect Type C,18\nDefect Type D,12\nDefect Type E,8\nDefect Type F,4";
    setInput(exampleData);
    handleInputChange({ target: { value: exampleData } });
  }

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

  async function handleDownload() {
    if (!chartRef.current) return;
    try {
      const dataUrl = await toPng(chartRef.current, {
        backgroundColor: '#ffffff',
        pixelRatio: 2, // Higher quality
      });
      const link = document.createElement('a');
      link.download = 'pareto-chart.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
      alert('Export failed! Please try again.');
    }
  }

  return (
    <div className="container" style={{ maxWidth: '100%', marginTop: 40 }}>
      <header className="header">
        <Logo />
      </header>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
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
      <div style={{display: "flex", gap: 10, marginBottom: 10}}>
        <button onClick={fillExampleData}
          style={{
            background: "#f8f9fa",
            border: "2px solid #dee2e6",
            borderRadius: 6,
            padding: "8px 16px",
            fontSize: 14,
            cursor: "pointer",
            color: "#495057",
            fontWeight: 600
          }}
          onMouseOver={(e) => e.target.style.background = "#e9ecef"}
          onMouseOut={(e) => e.target.style.background = "#f8f9fa"}
        >
          📋 Fill with Example Data
        </button>
      </div>
      <textarea
        rows={6}
        cols={50}
        placeholder="A,20\nB,10\nC,8"
        value={input}
        onChange={handleInputChange}
      />
      {error && <p style={{color:"salmon"}}>{error}</p>}
      {data.length > 0 && (
        <>
          <button onClick={handleDownload}
            style={{
              background: "linear-gradient(90deg, #7b61ff 0%, #7ae5ff 100%)",
              color: "#fff",
              fontWeight: 700,
              padding: "12px 24px",
              borderRadius: 8,
              border: "none",
              fontSize: 16,
              marginBottom: 16,
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.2s ease"
            }}
            onMouseOver={(e) => e.target.style.transform = "translateY(-1px)"}
            onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
          >
            📥 Export as PNG
          </button>
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
              <Bar dataKey="value" fill={isDarkTheme ? "#8b8bff" : "#8884d8"} animationDuration={800} />
            </BarChart>
          </div>
        </>
      )}
      <p>Copy-paste CSV like:<br/>A,20<br/>B,10<br/>C,8</p>
      <footer style={{marginTop:40, textAlign:"center", opacity:0.7}}>
        Built by Amber @ The Solution Desk
      </footer>
    </div>
  );
}

export default ParetoChartTool;
