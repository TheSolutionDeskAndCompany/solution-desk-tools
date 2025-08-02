import React, { useState } from "react";
import { Link } from "react-router-dom";

const DEFAULT_CATEGORIES = [
  { label: "People", causes: [""] },
  { label: "Process", causes: [""] },
  { label: "Equipment", causes: [""] },
  { label: "Materials", causes: [""] },
  { label: "Environment", causes: [""] },
  { label: "Management", causes: [""] }
];

export default function FishboneTool() {
  const [effect, setEffect] = useState("Describe the problem here");
  const [categories, setCategories] = useState(DEFAULT_CATEGORIES);

  // Add a cause to a category
  const addCause = idx => {
    setCategories(cs => {
      const next = [...cs];
      next[idx].causes.push("");
      return next;
    });
  };

  // Edit a cause
  const editCause = (catIdx, causeIdx, value) => {
    setCategories(cs => {
      const next = [...cs];
      next[catIdx].causes[causeIdx] = value;
      return next;
    });
  };

  // Add a new category
  const addCategory = () => {
    setCategories(cs => [...cs, { label: "New Category", causes: [""] }]);
  };

  // Edit category label
  const editCategory = (idx, value) => {
    setCategories(cs => {
      const next = [...cs];
      next[idx].label = value;
      return next;
    });
  };

  return (
    <div className="container" style={{ maxWidth: 900, marginTop: 40 }}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
      <h1>Fishbone Diagram Generator</h1>
      <p>
        Enter the problem/effect and causes in each category.<br/>
        Use this diagram to identify root causes visually.
      </p>
      <label>
        <b>Effect / Problem Statement:</b><br/>
        <input value={effect} onChange={e => setEffect(e.target.value)} style={{width:"100%", fontSize:"1.1em", margin:"8px 0 16px"}} />
      </label>
      <div style={{display:"flex", flexWrap:"wrap", gap: 20, marginBottom: 24}}>
        {categories.map((cat, i) => (
          <div key={i} style={{background:"#f6f7fb", padding: 14, borderRadius: 10, minWidth:210, flex: "1 0 210px"}}>
            <input
              value={cat.label}
              onChange={e => editCategory(i, e.target.value)}
              style={{width:"100%", fontWeight:600, marginBottom:6, fontSize:"1em"}}
            />
            {cat.causes.map((cause, j) => (
              <input
                key={j}
                placeholder="Cause..."
                value={cause}
                onChange={e => editCause(i, j, e.target.value)}
                style={{width:"100%", marginBottom: 4}}
              />
            ))}
            <button onClick={() => addCause(i)} style={{marginTop:6}}>+ Add Cause</button>
          </div>
        ))}
        <button onClick={addCategory} style={{height:50, alignSelf:"center"}}>+ Add Category</button>
      </div>
      <FishboneSVG categories={categories} effect={effect} />
      <div style={{marginTop: 26}}>
        <Link to="/" style={{color:"var(--accent)"}}>← Back to tools</Link>
      </div>
      <footer style={{marginTop:30, fontSize: "0.93rem", color: "var(--footer)"}}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}

// A simple SVG Fishbone render
function FishboneSVG({ categories, effect }) {
  const h = 320, w = 800;
  const midY = h / 2;
  const leftX = 120, rightX = w - 40;
  const catPad = (h - 40) / (categories.length - 1);
  return (
    <svg width={w} height={h} style={{background:"#fff", margin:"auto", display:"block", marginBottom: 18, borderRadius:12, boxShadow:"0 2px 8px #0001"}}>
      {/* main backbone */}
      <line x1={leftX} y1={midY} x2={rightX} y2={midY} stroke="#333" strokeWidth={4}/>
      {/* effect head */}
      <rect x={rightX-10} y={midY-25} width={30} height={50} fill="#7b61ff" rx={12} />
      <text x={rightX+5} y={midY} alignmentBaseline="middle" fontSize="18" fontWeight="bold" fill="#fff">{">"}</text>
      <text x={rightX+38} y={midY+5} fontSize="17" fill="#232323">{effect}</text>
      {/* categories + causes */}
      {categories.map((cat, i) => {
        const up = i % 2 === 0;
        const cy = midY + (up ? -1 : 1) * (catPad * Math.floor(i/2));
        const cx = leftX + 80 + Math.floor(i/2)*32;
        // Draw fin
        return (
          <g key={i}>
            <line x1={cx} y1={midY} x2={cx+60} y2={cy} stroke="#a97fff" strokeWidth={3}/>
            <text x={cx+66} y={cy+(up?-7:19)} fontWeight="bold" fontSize="15" fill="#7b61ff">{cat.label}</text>
            {/* causes on each branch */}
            {cat.causes.map((cause, j) => !!cause && (
              <text
                key={j}
                x={cx+66}
                y={cy+(up?-20-(j*16):34+(j*16))}
                fontSize="14"
                fill="#232323"
              >- {cause}</text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}
