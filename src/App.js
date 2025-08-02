import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ParetoChartTool from "./ParetoChartTool";
import "./App.css";

function Home() {
  return (
    <div className="container">
      <h1>Solution Desk: Six Sigma Tools</h1>
      <p>Welcome! Choose a tool below:</p>
      <ul style={{listStyle:"none", padding:0}}>
        <li style={{marginBottom:16}}>
          <Link to="/pareto">
            <button style={{fontSize: "1.1em", padding: "12px 32px"}}>📊 Pareto Chart Generator</button>
          </Link>
        </li>
        {/* Add more tools here as you build them! */}
        <li>
          <button disabled style={{opacity:0.6, fontSize: "1.1em", padding: "12px 32px"}}>🐟 Fishbone Diagram (Coming Soon)</button>
        </li>
        <li style={{marginTop:16}}>
          <button disabled style={{opacity:0.6, fontSize: "1.1em", padding: "12px 32px"}}>📈 Control Charts (Coming Soon)</button>
        </li>
        <li style={{marginTop:16}}>
          <button disabled style={{opacity:0.6, fontSize: "1.1em", padding: "12px 32px"}}>🎯 5 Why Analysis (Coming Soon)</button>
        </li>
      </ul>
      <footer style={{marginTop:40, textAlign:"center", opacity:0.7}}>
        Built by Amber @ The Solution Desk
      </footer>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pareto" element={<ParetoChartTool />} />
        {/* More tools/routes can go here */}
      </Routes>
    </Router>
  );
}

export default App;
