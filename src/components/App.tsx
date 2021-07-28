import React, { useEffect, useState } from "react";
import "../global.css";
import ILayout from "../_interfaces/Layout";
import NodeModel from "../_interfaces/Node";
import Coords from "../_models/Coords";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { nodesSelector } from "../_store/_reducers/nodes";
import {
  currentSelectionSelector,
  select,
} from "../_store/_reducers/selection";
import Node from "./Node";

function App() {
  const selection = useAppSelector(currentSelectionSelector);
  const nodes = useAppSelector(nodesSelector);
  const dispatch = useAppDispatch();
  /** WINDOW DIMENSIONS */
  const [layout, setLayout] = useState<ILayout>({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const { height, width } = layout;
  /** ORIGIN POINT */
  const [origin, setOrigin] = useState<Coords>({
    x: width / 2,
    y: height / 2,
  });
  /** RESIZE UPDATER */
  function updateDimensions() {
    const height = window.innerHeight;
    const width = window.innerWidth;
    setLayout({
      height,
      width,
    });
    setOrigin({ x: width / 2, y: height / 2 });
  }
  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);
  return (
    <div id="the-expans--app">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}"`}
      >
        {nodes.map((node) => (
          <Node
            key={node.id}
            origin={origin}
            node={node}
            selected={selection === node}
            select={(selection?: NodeModel) => dispatch(select({ selection }))}
          />
        ))}
      </svg>
    </div>
  );
}

export default App;
