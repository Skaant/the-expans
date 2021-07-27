import React, { useEffect, useState } from 'react';
import "../global.css"

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
        <circle cx={x} cy={y} r="50"></circle>
      </svg>
    </div>
  );
}

export default App;
