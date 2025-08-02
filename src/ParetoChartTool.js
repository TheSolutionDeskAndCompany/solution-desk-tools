import React, { useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toPng } from "html-to-image";
import SharedLayout from './components/SharedLayout';
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
    <SharedLayout
      title="Pareto Chart Generator"
      subtitle="Identify the Most Important Problems"
      description="Create professional Pareto charts to visualize the 80/20 rule and prioritize your improvement efforts."
    >
        <div className="form-group">
          <label>Enter your data (Category,Value format, one per line):</label>
          <div style={{display: "flex", gap: 10, marginBottom: 10}}>
            <button 
              onClick={fillExampleData}
              className="btn btn-outline"
              style={{ fontSize: '0.9rem' }}
            >
              📋 Fill with Example Data
            </button>
          </div>
          <textarea
            rows={6}
            placeholder="Defect Type A,45\nDefect Type B,23\nDefect Type C,18\nDefect Type D,12"
            value={input}
            onChange={handleInputChange}
            style={{ fontFamily: 'monospace' }}
          />
          {error && <p style={{color: "var(--accent-pink)", marginTop: '0.5rem'}}>{error}</p>}
        </div>

        {data.length > 0 && (
          <>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <button 
                onClick={handleDownload}
                className="btn btn-primary"
                style={{ marginRight: '1rem' }}
              >
                📥 Export as PNG
              </button>
            </div>
            
            <h2>Your Pareto Chart</h2>
            <div className="chart-container" ref={chartRef} style={{
              background: 'white',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '2rem'
            }}>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart 
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
                  <Bar 
                    dataKey="value" 
                    fill="var(--primary-teal)" 
                    animationDuration={800} 
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div style={{ 
              background: 'rgba(6, 182, 212, 0.1)', 
              padding: '1rem', 
              borderRadius: 'var(--radius-md)',
              border: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
              <h3>💡 Pareto Principle (80/20 Rule)</h3>
              <p>Focus on the categories with the highest values - they likely represent 80% of your problems and should be prioritized for maximum impact.</p>
            </div>
          </>
        )}
    </SharedLayout>
  );
}

export default ParetoChartTool;
