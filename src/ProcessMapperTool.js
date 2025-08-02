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

import 'reactflow/dist/style.css';

const initialNodes = [
  {
    id: '1',
    type: 'default',
    position: { x: 250, y: 25 },
    data: { label: 'Start Process' },
  },
  {
    id: '2',
    type: 'default',
    position: { x: 250, y: 125 },
    data: { label: 'Step 1' },
  },
];

const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

let id = 0;
const getId = () => `dndnode_${id++}`;

export default function ProcessMapperTool() {
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

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `New ${type} step` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance, setNodes],
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

  const deleteSelectedNode = useCallback(() => {
    if (selectedNode) {
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
        link.download = 'process-map.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Export failed:', err);
        alert('Export failed! Please try again.');
      }
    }
  };

  const clearCanvas = () => {
    setNodes([]);
    setEdges([]);
    setSelectedNode(null);
    setNodeLabel('');
  };

  const addNode = (type) => {
    const newNode = {
      id: getId(),
      type: 'default',
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `New ${type}` },
    };
    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div className="container" style={{ maxWidth: '100%', height: '100vh', marginTop: 40 }}>
      <div className="nav-bar">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <button className="back-button" title="Back to Home">
            ← Home
          </button>
        </Link>
      </div>
      
      <h1>Process Mapping Tool</h1>
      <p style={{ marginBottom: 20 }}>
        Create visual process maps by adding steps, connecting them, and editing labels. 
        Click nodes to edit, drag to move, and use the toolbar to add new elements.
      </p>

      <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
        <button
          onClick={() => addNode('Step')}
          style={{
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          ➕ Add Step
        </button>
        <button
          onClick={() => addNode('Decision')}
          style={{
            background: '#FF9800',
            color: 'white',
            border: 'none',
            padding: '8px 16px',
            borderRadius: 4,
            cursor: 'pointer',
            fontSize: 14
          }}
        >
          ◆ Add Decision
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
          onClick={clearCanvas}
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
          🗑️ Clear All
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
          <h3 style={{ margin: '0 0 10px 0', fontSize: 16 }}>Edit Selected Node</h3>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <input
              type="text"
              value={nodeLabel}
              onChange={(e) => setNodeLabel(e.target.value)}
              placeholder="Enter node label"
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
          </div>
        </div>
      )}

      <div style={{ width: '100%', height: '500px', border: '1px solid #ddd', borderRadius: 8 }}>
        <div className="reactflow-wrapper" ref={reactFlowWrapper} style={{ width: '100%', height: '100%' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
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
                💡 Click nodes to edit • Drag to connect • Use toolbar to add elements
              </div>
            </Panel>
          </ReactFlow>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <h3>Instructions:</h3>
        <ul style={{ fontSize: 14, lineHeight: 1.6 }}>
          <li><strong>Add Elements:</strong> Use the toolbar buttons to add new steps or decision points</li>
          <li><strong>Edit Labels:</strong> Click any node to select it, then edit the label in the panel above</li>
          <li><strong>Connect Steps:</strong> Drag from one node's edge to another to create connections</li>
          <li><strong>Move Elements:</strong> Drag nodes around the canvas to organize your process</li>
          <li><strong>Export:</strong> Click "Export PNG" to download your process map as an image</li>
        </ul>
      </div>

      <footer style={{ marginTop: 30, fontSize: '0.93rem', color: 'var(--footer)' }}>
        &copy; {new Date().getFullYear()} The Solution Desk
      </footer>
    </div>
  );
}
