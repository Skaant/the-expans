import React, { useEffect, useState } from 'react';
import "../global.css"
import IData from '../_interfaces/Data';
import ILayout from '../_interfaces/Layout';
import INode from '../_interfaces/Node';
import IOrigin from '../_interfaces/Origin';
import Node from './Node';

function App() {
  /** WINDOW DIMENSIONS */
  const [layout, setLayout] = useState<ILayout>({
    height: window.innerHeight,
    width: window.innerWidth
  })
  const { height, width } = layout
  /** ORIGIN POINT */
  const [origin, setOrigin] = useState<IOrigin>({ x: width/2, y: height/2 })
  /** DATA */
  const [data/* , setData */] = useState<IData>({
    nodes: [{
      id: 'salut',
      x: -70,
      y: -100
    }, {
      id: 'ok lol',
      x: 40,
      y: 0
    }],
    edges: [],
    areas: []
  })
  const {nodes} = data
  /** SELECTOR */
  const [selection, setSelection] = useState<INode>()
  function select(selected?: INode) {
    setSelection(selection && selection === selected ? undefined : selected)
  }
  /** RESIZE UPDATER */
  function updateDimensions() {
    const height = window.innerHeight
    const width = window.innerWidth
    setLayout({
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
          nodes.map(node => (
            <Node key={node.id} origin={origin} node={node}
              selected={selection === node}
              select={select} />
          ))
        }
      </svg>
    </div>
  );
}

export default App;
