import React, { useState, useRef } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toPng } from "html-to-image";
import { Helmet } from 'react-helmet';
import SharedLayout from './components/SharedLayout';
import "./App.css";
import "./components/ParetoTool.css";

function ParetoChartTool() {
  // Default sample data for immediate "wow" moment
  const sampleData = "Customer Complaints,45\nShipping Delays,23\nProduct Defects,18\nBilling Issues,12\nReturn Processing,8";
  
  const [data, setData] = useState([
    { category: "Customer Complaints", value: 45 },
    { category: "Shipping Delays", value: 23 },
    { category: "Product Defects", value: 18 },
    { category: "Billing Issues", value: 12 },
    { category: "Return Processing", value: 8 },
  ]);
  const [input, setInput] = useState(sampleData);
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
      title="Pareto Analysis Tool"
      subtitle="Find Your Team's Biggest Bottlenecks in Minutes"
      description="Paste your process data and see your top bottlenecks instantly. No consultants needed."
    >
      <Helmet>
        <title>Pareto Analysis Tool – The Solution Desk</title>
        <link rel="icon" href="/the-solution-desk-logo.png" />
        <meta name="description" content="Create professional Pareto charts to identify the 80/20 rule in your data. Free business process improvement tool." />
      </Helmet>
      
      {/* Hero Section */}
      <div className="pareto-hero">
        <div className="hero-content">
          <h1 className="hero-title">Slash Your Team's Process Bottlenecks in Minutes</h1>
          <p className="hero-subtitle">Paste your data below and instantly see which problems are costing you the most time and money. Based on the proven 80/20 rule.</p>
          
          {/* How It Works Steps */}
          <div className="how-it-works">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-text">Paste or type your categories and values</div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-text">Click Generate to see your chart</div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-text">Focus on the biggest bars first</div>
            </div>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="input-section">
        <div className="input-header">
          <h2>Enter Your Process Data</h2>
          <p>Format: Category,Value (one per line). Or try our sample data first.</p>
        </div>
        
        <div className="input-controls">
          <button 
            onClick={fillExampleData}
            className="btn btn-secondary sample-btn"
          >
            <span className="btn-icon">📋</span>
            Try Sample Data
          </button>
        </div>
        
        <div className="textarea-container">
          <textarea
            className="data-input"
            rows={8}
            placeholder="Customer Complaints,45\nShipping Delays,23\nProduct Defects,18\nBilling Issues,12\nReturn Processing,8"
            value={input}
            onChange={handleInputChange}
          />
          {error && <div className="error-message">{error}</div>}
        </div>
      </div>

      {/* Chart Section */}
      {data.length > 0 && (
        <div className="chart-section">
          <div className="chart-header">
            <h2>Your Pareto Analysis</h2>
            <div className="chart-actions">
              <button 
                onClick={handleDownload}
                className="btn btn-primary export-btn"
              >
                <span className="btn-icon">📥</span>
                Export PNG
              </button>
            </div>
          </div>
          
          <div className="chart-container" ref={chartRef}>
            <ResponsiveContainer width="100%" height={450}>
              <BarChart 
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="category" 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  axisLine={{ stroke: '#6B7280' }}
                />
                <YAxis 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }}
                  axisLine={{ stroke: '#6B7280' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  fill="#20C997"
                  radius={[4, 4, 0, 0]}
                  animationDuration={800}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          {/* Results Interpretation */}
          <div className="results-section">
            <div className="insight-card">
              <div className="insight-icon">🎯</div>
              <div className="insight-content">
                <h3>What This Means</h3>
                <p>The tallest bars are your biggest bottlenecks. Focus on fixing these first—they'll give you 80% of your improvement with 20% of the effort.</p>
              </div>
            </div>
            
            <div className="next-steps">
              <h4>Next Steps:</h4>
              <ul>
                <li>Tackle the top 2-3 categories first</li>
                <li>Measure impact after 30 days</li>
                <li>Re-run this analysis to track progress</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      
      {/* Trust Signal */}
      <div className="trust-signal">
        <p>No signup required • Trusted by 500+ teams • Data stays private</p>
      </div>
    </SharedLayout>
  );
}

export default ParetoChartTool;
