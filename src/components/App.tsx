import React, { useEffect, useState } from 'react';
import "../global.css"
import Data from '../models/Data';

function App() {
  /** WINDOW DIMENSIONS */
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const { height, width } = dimensions
  /** ORIGIN POINT */
  const [origin, setOrigin] = useState({ x: width/2, y: height/2 })
  const { x, y } = origin
  /** DATA */
  const [data, setData] = useState<Data>({
    nodes: [{
      id: 'salut',
      x: 70,
      y: 300
    }],
    edges: [],
    areas: []
  })
  const {nodes} = data
  /** RESIZE UPDATER */
  function updateDimensions() {
    const height = window.innerHeight
    const width = window.innerWidth
    setDimensions({
      height,
      width
    })
    setOrigin({ x: width / 2, y: height/2})
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <div id="the-expans--app"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}"`}
      >
        {
          nodes.map(({id, x: nodeX, y: nodeY}) => (
            <g>
              <text x={x + nodeX} y={y + nodeY - 70} textAnchor="middle">{id}</text>
              <circle cx={x + nodeX} cy={y + nodeY} r={50} style={{color: 'white'}}/>
            </g>
          ))
        }
      </svg>
    </div>
  );
}

export default App;
