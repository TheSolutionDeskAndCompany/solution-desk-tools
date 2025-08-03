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
    <SharedLayout>
      <Helmet>
        <title>Pareto Analysis Tool – The Solution Desk</title>
        <link rel="icon" href="/the-solution-desk-logo.png" />
        <meta name="description" content="Create professional Pareto charts to identify the 80/20 rule in your data. Free business process improvement tool." />
      </Helmet>
      
      {/* Hero Section - Full Width Like Homepage */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Pareto Analysis Tool</h1>
            <p className="hero-subtitle">
              Identify the vital few factors that drive 80% of your problems. Create professional Pareto charts to focus your improvement efforts where they matter most.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tool Section - Wide Two-Column Grid */}
      <section className="tool-section">
        <div className="container">
          <div className="tool-grid">
            {/* Left Column - Input */}
            <div className="input-column">
              <div className="section-header">
                <h2>Enter Your Process Data</h2>
                <p>Format: Category,Value (one per line)</p>
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
              
              <textarea
                className="data-input"
                rows={12}
                placeholder="Customer Complaints,45\nShipping Delays,23\nProduct Defects,18\nBilling Issues,12\nReturn Processing,8"
                value={input}
                onChange={handleInputChange}
              />
              {error && <div className="error-message">{error}</div>}
              
              <div className="how-it-works">
                <h3>How It Works:</h3>
                <ol>
                  <li>Paste your categories and values above</li>
                  <li>Your chart appears automatically on the right</li>
                  <li>Focus on the tallest bars first for maximum impact</li>
                </ol>
              </div>
            </div>

            {/* Right Column - Results */}
            <div className="output-column">
              <div className="section-header">
                <h2>Your Pareto Analysis</h2>
                {data.length > 0 && (
                  <button 
                    onClick={handleDownload}
                    className="btn btn-primary export-btn"
                  >
                    <span className="btn-icon">📥</span>
                    Export PNG
                  </button>
                )}
              </div>
              
              {data.length > 0 ? (
                <>
                  <div className="chart-container" ref={chartRef}>
                    <ResponsiveContainer width="100%" height={400}>
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
                  
                  <div className="results-insights">
                    <div className="insight-section">
                      <div className="insight-header">
                        <div className="insight-icon">🎯</div>
                        <h3>What This Means</h3>
                      </div>
                      <p>The tallest bars are your biggest bottlenecks. Focus on fixing these first—they'll give you 80% of your improvement with 20% of the effort.</p>
                    </div>
                    
                    <div className="next-steps-section">
                      <div className="steps-header">
                        <div className="steps-icon">✅</div>
                        <h3>Next Steps</h3>
                      </div>
                      <ul>
                        <li>Tackle the top 2-3 categories first</li>
                        <li>Measure impact after 30 days</li>
                        <li>Re-run this analysis to track progress</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="placeholder-content">
                  <div className="placeholder-icon">📈</div>
                  <h3>Your Chart Will Appear Here</h3>
                  <p>Enter your data on the left to see your Pareto analysis. Try the sample data to get started quickly.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Signal */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-signal">
            <p>No signup required • Trusted by 500+ teams • Data stays private</p>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
}

export default ParetoChartTool;
