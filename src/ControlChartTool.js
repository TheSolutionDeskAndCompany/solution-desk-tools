import React, { useState } from "react";
import { Link } from "react-router-dom";

function parseInputData(raw) {
  // Accepts comma, space, or new line separated numbers
  return raw
    .replace(/,/g, " ")
    .split(/[\s\n]+/)
    .map(Number)
    .filter(n => !isNaN(n));
}

export default function ControlChartTool() {
  const [dataRaw, setDataRaw] = useState("15\n18\n13\n17\n19\n16\n22\n14");
  const [ucl, setUCL] = useState("");
  const [lcl, setLCL] = useState("");

  const data = parseInputData(dataRaw);
  const mean = data.length ? (data.reduce((a, b) => a + b, 0) / data.length) : 0;

  return (
    <div className="container" style={{maxWidth:700, marginTop:40}}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
      <h1>Control Chart Generator</h1>
      <p>
        Paste your measurements below. Enter one value per line, or separate by spaces or commas.<br/>
        Optionally set Upper and Lower Control Limits.
      </p>
      <textarea
        rows={5}
        style={{width:"100%", fontFamily:"monospace", marginBottom:10}}
        value={dataRaw}
        onChange={e => setDataRaw(e.target.value)}
        placeholder="e.g. 12, 13, 15, 17, 16, 20"
      />
      <div style={{display:"flex", gap:14, marginBottom:22}}>
        <label>
          UCL: <input type="number" value={ucl} onChange={e => setUCL(e.target.value)} style={{width:60}} />
        </label>
        <label>
          LCL: <input type="number" value={lcl} onChange={e => setLCL(e.target.value)} style={{width:60}} />
        </label>
      </div>
      <ControlChart data={data} mean={mean} ucl={ucl} lcl={lcl} />
      <div style={{marginTop:24}}>
        <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
      </div>
      <footer style={{marginTop:30, fontSize: "0.93rem", color: "var(--footer)"}}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

// Chart SVG component
function ControlChart({ data, mean, ucl, lcl }) {
  if (!data.length) return <p style={{color:"red"}}>No data</p>;
  const w = 600, h = 240;
  const pad = 50;
  const minY = Math.min(lcl || mean - 10, ...data);
  const maxY = Math.max(ucl || mean + 10, ...data);
  const rangeY = maxY - minY || 1;
  const toY = v => h - pad - ((v - minY) / rangeY) * (h - pad * 2);

  return (
    <svg width={w} height={h} style={{background:"#fff", borderRadius:12, boxShadow:"0 1px 8px #0001", margin:"auto", display:"block"}}>
      {/* Y Axis */}
      <line x1={pad} y1={pad} x2={pad} y2={h-pad} stroke="#444" strokeWidth={2}/>
      {/* X Axis */}
      <line x1={pad} y1={h-pad} x2={w-pad} y2={h-pad} stroke="#444" strokeWidth={2}/>
      {/* Data line */}
      {data.map((y, i, arr) =>
        i < arr.length-1 ?
        <line
          key={i}
          x1={pad + ((w-2*pad)/(arr.length-1))*i}
          y1={toY(y)}
          x2={pad + ((w-2*pad)/(arr.length-1))*(i+1)}
          y2={toY(arr[i+1])}
          stroke="#7b61ff"
          strokeWidth={3}
        /> : null
      )}
      {/* Points */}
      {data.map((y, i) =>
        <circle
          key={i}
          cx={pad + ((w-2*pad)/(data.length-1))*i}
          cy={toY(y)}
          r={5}
          fill="#7b61ff"
          stroke="#fff"
          strokeWidth={2}
        />
      )}
      {/* Mean line */}
      <line x1={pad} y1={toY(mean)} x2={w-pad} y2={toY(mean)} stroke="#43b884" strokeDasharray="8,6" strokeWidth={2}/>
      <text x={w-pad+10} y={toY(mean)+4} fontSize={13} fill="#43b884">Mean ({mean.toFixed(2)})</text>
      {/* UCL/LCL lines */}
      {ucl && (
        <>
          <line x1={pad} y1={toY(Number(ucl))} x2={w-pad} y2={toY(Number(ucl))} stroke="#ff3333" strokeDasharray="4,6" strokeWidth={2}/>
          <text x={w-pad+10} y={toY(Number(ucl))+4} fontSize={13} fill="#ff3333">UCL ({ucl})</text>
        </>
      )}
      {lcl && (
        <>
          <line x1={pad} y1={toY(Number(lcl))} x2={w-pad} y2={toY(Number(lcl))} stroke="#fbc02d" strokeDasharray="4,6" strokeWidth={2}/>
          <text x={w-pad+10} y={toY(Number(lcl))+4} fontSize={13} fill="#fbc02d">LCL ({lcl})</text>
        </>
      )}
    </svg>
  );
}
