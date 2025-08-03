import React, { useState, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import html2canvas from 'html2canvas';
import { Helmet } from 'react-helmet';
import SharedLayout from './components/SharedLayout';

function ParetoChartTool() {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const chartRef = useRef(null);

  const parseInput = (inputText) => {
    const lines = inputText.trim().split('\n').filter(line => line.trim());
    const parsedData = [];
    
    for (const line of lines) {
      const parts = line.split(',');
      if (parts.length >= 2) {
        const category = parts[0].trim();
        const value = parseFloat(parts[1].trim());
        
        if (!isNaN(value)) {
          parsedData.push({ category, value });
        }
      }
    }
    
    return parsedData.sort((a, b) => b.value - a.value);
  };

  const handleInputChange = (e) => {
    const newInput = e.target.value;
    setInput(newInput);
    setError('');
    
    if (newInput.trim()) {
      try {
        const parsedData = parseInput(newInput);
        if (parsedData.length > 0) {
          setData(parsedData);
        } else {
          setData([]);
          setError('Please enter valid data in the format: Category,Value');
        }
      } catch (err) {
        setError('Error parsing data. Please check your format.');
        setData([]);
      }
    } else {
      setData([]);
    }
  };

  const fillExampleData = () => {
    const exampleData = `Customer Complaints,45\nShipping Delays,23\nProduct Defects,18\nBilling Issues,12\nReturn Processing,8\nInventory Issues,5\nSystem Downtime,3`;
    setInput(exampleData);
    setData(parseInput(exampleData));
    setError('');
  };

  const handleDownload = async () => {
    if (chartRef.current) {
      try {
        const canvas = await html2canvas(chartRef.current, {
          backgroundColor: '#1F2937',
          scale: 2
        });
        
        const link = document.createElement('a');
        link.download = 'pareto-analysis.png';
        link.href = canvas.toDataURL();
        link.click();
      } catch (error) {
        console.error('Error generating image:', error);
      }
    }
  };

  return (
    <SharedLayout>
      <Helmet>
        <title>Pareto Analysis Tool – The Solution Desk</title>
        <link rel="icon" href="/the-solution-desk-logo.png" />
        <meta name="description" content="Create professional Pareto charts to identify the 80/20 rule in your data. Free business process improvement tool." />
      </Helmet>
      
      <main className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <header className="py-12 text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Pareto Analysis Tool
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              Identify the vital few factors that drive 80% of your problems. Create professional Pareto charts to focus your improvement efforts where they matter most.
            </p>
          </div>
        </header>

        <section className="flex-1 py-8">
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '2rem 1rem',
            display: 'flex',
            flexDirection: 'row',
            gap: '3rem',
            minHeight: '600px'
          }}>
            <style>{`
              @media (max-width: 900px) {
                .responsive-container {
                  flex-direction: column !important;
                  gap: 2rem !important;
                }
              }
            `}</style>
              
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50" style={{flex: '1', minWidth: '450px'}}>
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-2">Enter Your Process Data</h2>
                <p className="text-slate-400 text-sm">Format: Category,Value (one per line)</p>
              </div>
              
              <div className="mb-4">
                <button 
                  onClick={fillExampleData}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 hover:border-teal-500/50 text-teal-400 rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>📋</span>
                  Try Sample Data
                </button>
              </div>
              
              <textarea 
                className="w-full h-64 bg-slate-900/50 border border-slate-600/50 rounded-xl p-4 text-white placeholder-slate-500 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-200 font-mono text-sm leading-relaxed"
                placeholder="Customer Complaints,45\nShipping Delays,23\nProduct Defects,18\nBilling Issues,12\nReturn Processing,8"
                value={input}
                onChange={handleInputChange}
              />
              
              {error && (
                <div className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                  {error}
                </div>
              )}
              
              <div className="mt-6 bg-teal-500/5 border border-teal-500/20 rounded-xl p-4">
                <h4 className="font-semibold text-white mb-2 text-sm">How It Works:</h4>
                <ol className="list-decimal list-inside text-slate-400 text-sm space-y-1">
                  <li>Paste your categories and values above</li>
                  <li>Your chart appears automatically on the right</li>
                  <li>Focus on the tallest bars first for maximum impact</li>
                </ol>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-slate-700/50" style={{flex: '1', minWidth: '450px'}}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-white">Your Pareto Analysis</h2>
                {data.length > 0 && (
                  <button 
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-lg hover:shadow-xl"
                  >
                    <span>📥</span>
                    Export PNG
                  </button>
                )}
              </div>
              
              {data.length > 0 ? (
                <>
                  <div 
                    ref={chartRef}
                    className="bg-slate-900/50 border border-slate-600/50 rounded-xl p-6 mb-6 h-80"
                  >
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 60 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#475569" opacity={0.3} />
                        <XAxis 
                          dataKey="category" 
                          tick={{ fill: '#94A3B8', fontSize: 12 }} 
                          axisLine={{ stroke: '#64748B' }}
                          angle={-45}
                          textAnchor="end"
                          height={80}
                        />
                        <YAxis 
                          tick={{ fill: '#94A3B8', fontSize: 12 }} 
                          axisLine={{ stroke: '#64748B' }}
                        />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: '#1E293B', 
                            border: '1px solid #475569', 
                            borderRadius: '8px', 
                            color: '#F8FAFC',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)'
                          }} 
                        />
                        <Bar 
                          dataKey="value" 
                          fill="#14B8A6" 
                          radius={[4, 4, 0, 0]}
                          animationDuration={800}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-900/30 border border-slate-600/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">🎯</span>
                        <h3 className="font-semibold text-white text-sm">What This Means</h3>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        The tallest bars are your biggest bottlenecks. Focus on fixing these first—they'll give you 80% of your improvement with 20% of the effort.
                      </p>
                    </div>
                    
                    <div className="bg-slate-900/30 border border-slate-600/30 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">✅</span>
                        <h3 className="font-semibold text-white text-sm">Next Steps</h3>
                      </div>
                      <ul className="text-slate-400 text-sm space-y-1 list-disc list-inside">
                        <li>Tackle the top 2-3 categories first</li>
                        <li>Measure impact after 30 days</li>
                        <li>Re-run this analysis to track progress</li>
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-80 text-center">
                  <div className="text-6xl mb-4 opacity-50">📈</div>
                  <h3 className="text-xl font-semibold text-slate-300 mb-2">Your Chart Will Appear Here</h3>
                  <p className="text-slate-500 max-w-sm">
                    Enter your data on the left to see your Pareto analysis. Try the sample data to get started quickly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <footer className="mt-auto py-6 border-t border-slate-700/50 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm">
              No signup required • Trusted by 500+ teams • Data stays private
            </p>
          </div>
        </footer>
      </main>
    </SharedLayout>
  );
}

export default ParetoChartTool;
