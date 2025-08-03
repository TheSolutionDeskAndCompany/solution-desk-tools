import React, { useState, useCallback, useRef } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Panel,
} from 'reactflow';
import { toPng } from 'html-to-image';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import PaywallModal from './components/PaywallModal';
import Logo from './components/Logo';

import 'reactflow/dist/style.css';

// Initial fishbone structure
const initialNodes = [
  // Main spine (problem statement)
  {
    id: 'problem',
    type: 'default',
    position: { x: 600, y: 250 },
    data: { label: 'Problem Statement' },
    style: { 
      background: '#ff6b6b', 
      color: 'white', 
      border: '2px solid #ff5252',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
  // Category nodes (main bones)
  {
    id: 'people',
    type: 'default',
    position: { x: 200, y: 150 },
    data: { label: 'People' },
    style: { 
      background: '#4ecdc4', 
      color: 'white', 
      border: '2px solid #26a69a',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'process',
    type: 'default',
    position: { x: 300, y: 100 },
    data: { label: 'Process' },
    style: { 
      background: '#45b7d1', 
      color: 'white', 
      border: '2px solid #2196f3',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'equipment',
    type: 'default',
    position: { x: 400, y: 150 },
    data: { label: 'Equipment' },
    style: { 
      background: '#f7b731', 
      color: 'white', 
      border: '2px solid #ff9800',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'materials',
    type: 'default',
    position: { x: 200, y: 350 },
    data: { label: 'Materials' },
    style: { 
      background: '#5f27cd', 
      color: 'white', 
      border: '2px solid #673ab7',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'environment',
    type: 'default',
    position: { x: 300, y: 400 },
    data: { label: 'Environment' },
    style: { 
      background: '#00d2d3', 
      color: 'white', 
      border: '2px solid #00bcd4',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
  {
    id: 'management',
    type: 'default',
    position: { x: 400, y: 350 },
    data: { label: 'Management' },
    style: { 
      background: '#fd79a8', 
      color: 'white', 
      border: '2px solid #20C997',
      borderRadius: '8px',
      fontWeight: 'bold'
    },
  },
];

// Initial connections (fishbone structure)
const initialEdges = [
  { id: 'e-people-problem', source: 'people', target: 'problem', style: { stroke: '#333', strokeWidth: 3 } },
  { id: 'e-process-problem', source: 'process', target: 'problem', style: { stroke: '#333', strokeWidth: 3 } },
  { id: 'e-equipment-problem', source: 'equipment', target: 'problem', style: { stroke: '#333', strokeWidth: 3 } },
  { id: 'e-materials-problem', source: 'materials', target: 'problem', style: { stroke: '#333', strokeWidth: 3 } },
  { id: 'e-environment-problem', source: 'environment', target: 'problem', style: { stroke: '#333', strokeWidth: 3 } },
  { id: 'e-management-problem', source: 'management', target: 'problem', style: { stroke: '#333', strokeWidth: 3 } },
];

let id = 0;
const getId = () => `cause_${id++}`;

export default function PremiumFishboneTool() {
  const { hasPaidAccess, isAuthenticated } = useAuth();
  const [showPaywall, setShowPaywall] = useState(!hasPaidAccess);
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [nodeLabel, setNodeLabel] = useState('');

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const onNodeClick = useCallback((event, node) => {
    setSelectedNode(node);
    setNodeLabel(node.data.label);
  }, []);

  const updateNodeLabel = useCallback(() => {
    if (selectedNode) {
      setNodes((nds) =>
        nds.map((node) =>
          node.id === selectedNode.id
            ? { ...node, data: { ...node.data, label: nodeLabel } }
            : node
        )
      );
      setSelectedNode(null);
      setNodeLabel('');
    }
  }, [selectedNode, nodeLabel, setNodes]);

  const addCause = useCallback((categoryId) => {
    const categoryNode = nodes.find(n => n.id === categoryId);
    if (!categoryNode) return;

    const newNode = {
      id: getId(),
      type: 'default',
      position: { 
        x: categoryNode.position.x + (Math.random() - 0.5) * 100, 
        y: categoryNode.position.y + (Math.random() - 0.5) * 100 
      },
      data: { label: 'New Cause' },
      style: { 
        background: '#f8f9fa', 
        color: '#333', 
        border: '1px solid #dee2e6',
        borderRadius: '6px',
        fontSize: '12px'
      },
    };

    const newEdge = {
      id: `e-${newNode.id}-${categoryId}`,
      source: newNode.id,
      target: categoryId,
      style: { stroke: '#666', strokeWidth: 2 }
    };

    setNodes((nds) => nds.concat(newNode));
    setEdges((eds) => eds.concat(newEdge));
  }, [nodes, setNodes, setEdges]);

  const deleteSelectedNode = useCallback(() => {
    if (selectedNode && !['problem', 'people', 'process', 'equipment', 'materials', 'environment', 'management'].includes(selectedNode.id)) {
      setNodes((nds) => nds.filter((node) => node.id !== selectedNode.id));
      setEdges((eds) => eds.filter((edge) => 
        edge.source !== selectedNode.id && edge.target !== selectedNode.id
      ));
      setSelectedNode(null);
      setNodeLabel('');
    }
  }, [selectedNode, setNodes, setEdges]);

  const exportToPng = async () => {
    const flowElement = document.querySelector('.react-flow');
    if (flowElement) {
      try {
        const dataUrl = await toPng(flowElement, {
          backgroundColor: '#ffffff',
          pixelRatio: 2,
        });
        const link = document.createElement('a');
        link.download = 'fishbone-diagram.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Export failed:', err);
        alert('Export failed! Please try again.');
      }
    }
  };

  const resetDiagram = () => {
    setNodes(initialNodes);
    setEdges(initialEdges);
    setSelectedNode(null);
    setNodeLabel('');
  };

  // Show paywall modal for non-premium users
  if (showPaywall) {
    return (
      <>
        <PaywallModal 
          isOpen={showPaywall} 
          onClose={() => setShowPaywall(false)} 
          toolName="Fishbone Diagram" 
        />
        <div className="container" style={{ marginTop: 80 }}>
          <div className="nav-bar">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <button className="back-button" title="Back to Home">
                ← Home
              </button>
            </Link>
          </div>
          <header className="header">
            <Logo />
            <h1>🐟 Fishbone Diagram Tool</h1>
            <p>Interactive cause-and-effect analysis</p>
          </header>
        </div>
      </>
    );
  }

  // Premium tool content for paid users
  if (!hasPaidAccess) {
    return (
      <div style={{ position: "relative", maxWidth: '100%', height: '100vh', margin: "40px auto" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(30, 20, 60, 0.95)",
          color: "#fff",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 14,
          backdropFilter: "blur(3px)",
        }}>
          <div style={{ fontSize: 32, fontWeight: "bold", marginBottom: 20 }}>🔒 Premium Tool</div>
          <div style={{ margin: "18px 0", textAlign: "center", maxWidth: 400, fontSize: 18 }}>
            Unlock the advanced Fishbone Diagram tool with drag-and-drop functionality, 
            live editing, and professional export capabilities.
          </div>
          <div style={{ display: 'flex', gap: 15, marginTop: 30 }}>
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button style={{
                background: "linear-gradient(90deg, #8f7bee 0%, #59ccf7 100%)",
                border: "none",
                borderRadius: 8,
                padding: "14px 28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
                onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
              >
                🔑 Login
              </button>
            </Link>
            <Link to="/upgrade" style={{ textDecoration: 'none' }}>
              <button style={{
                background: "linear-gradient(90deg, #ff6b6b 0%, #ffa726 100%)",
                border: "none",
                borderRadius: 8,
                padding: "14px 28px",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
                onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
              >
                ⭐ Upgrade Now
              </button>
            </Link>
          </div>
          <Link to="/" style={{ color: '#ccc', marginTop: 30, textDecoration: 'none' }}>
            ← Back to Home
          </Link>
        </div>

        {/* Blurred preview */}
        <div style={{ filter: "blur(4px)", pointerEvents: "none", opacity: 0.3 }}>
          <div className="container" style={{ maxWidth: '100%', height: '100vh', marginTop: 40 }}>
            <h1>Premium Fishbone Diagram</h1>
            <div style={{ width: '100%', height: '600px', border: '1px solid #ddd', borderRadius: 8 }}>
              <div style={{ padding: 50, textAlign: 'center', color: '#666' }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>🐟</div>
                <h2>Advanced Fishbone Analysis</h2>
                <p>Drag-and-drop cause analysis with professional export</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{ maxWidth: '100%', height: '100vh', marginTop: 40 }}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
      
      <h1>Premium Fishbone Diagram</h1>
      <p style={{ marginBottom: 20 }}>
        Create comprehensive root cause analysis diagrams. Edit the problem statement, 
        add causes to categories, and export professional diagrams.
      </p>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
        <button
          onClick={() => addCause('people')}
          style={{
            background: '#4ecdc4',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          + People Cause
        </button>
        <button
          onClick={() => addCause('process')}
          style={{
            background: '#45b7d1',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          + Process Cause
        </button>
        <button
          onClick={() => addCause('equipment')}
          style={{
            background: '#f7b731',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          + Equipment Cause
        </button>
        <button
          onClick={exportToPng}
          style={{
            background: 'linear-gradient(90deg, #7b61ff 0%, #7ae5ff 100%)',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 600
          }}
        >
          📥 Export PNG
        </button>
        <button
          onClick={resetDiagram}
          style={{
            background: '#f44336',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          🔄 Reset
        </button>
      </div>

      {selectedNode && (
        <div style={{ 
          marginBottom: 20, 
          padding: 15, 
          background: '#f5f5f5', 
          borderRadius: 8,
          border: '1px solid #ddd'
        }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: 16 }}>Edit Selected Element</h3>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input
              type="text"
              value={nodeLabel}
              onChange={(e) => setNodeLabel(e.target.value)}
              placeholder="Enter label"
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: 4,
                fontSize: 14,
                flex: 1
              }}
              onKeyPress={(e) => e.key === 'Enter' && updateNodeLabel()}
            />
            <button
              onClick={updateNodeLabel}
              style={{
                background: '#2196F3',
                color: 'white',
                border: 'none',
                padding: '8px 16px',
                borderRadius: 4,
                cursor: 'pointer',
                fontSize: 14
              }}
            >
              Update
            </button>
            {!['problem', 'people', 'process', 'equipment', 'materials', 'environment', 'management'].includes(selectedNode.id) && (
              <button
                onClick={deleteSelectedNode}
                style={{
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontSize: 14
                }}
              >
                Delete
              </button>
            )}
          </div>
        </div>
      )}

      <div style={{ width: '100%', height: '600px', border: '1px solid #ddd', borderRadius: 8 }}>
        <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ width: '100%', height: '100%' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onNodeClick={onNodeClick}
            fitView
          >
            <Controls />
            <MiniMap />
            <Background variant="dots" gap={12} size={1} />
            <Panel position="top-left">
              <div style={{ 
                background: 'white', 
                padding: 10, 
                borderRadius: 4, 
                fontSize: 12,
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
              }}>
                🐟 Click elements to edit • Use toolbar to add causes • Drag to organize
              </div>
            </Panel>
          </ReactFlow>
        </div>
      </div>

      <footer style={{ marginTop: 30, fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}
