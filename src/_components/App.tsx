import React, { useEffect, useState } from "react";
import "../global.css";
import LayoutModel from "../_models/Layout";
import Coords from "../_models/Coords";
import { useAppDispatch, useAppSelector } from "../_store/hooks";
import { nodesSelector } from "../_store/_reducers/nodes";
import {
  currentSelectionSelector,
  select,
  SelectionModel,
} from "../_store/_reducers/selection";
import Node from "./Node";
import { edgesSelector } from "../_store/_reducers/edges";
import Edge from "./Edge";
import SelectionSwitch from "./SelectionSwitch/SelectionSwitch";
import NodeSlotModel from "../_models/NodeSlot";
import TopBar from "./TopBar";
import EdgeModel from "../_models/Edge";

function App() {
  const selection = useAppSelector(currentSelectionSelector);
  const nodes = useAppSelector(nodesSelector);
  const edges = useAppSelector(edgesSelector);
  const dispatch = useAppDispatch();
  /** WINDOW DIMENSIONS */
  const [layout, setLayout] = useState<LayoutModel>({
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
    const height = window.innerHeight - 4;
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
      <TopBar />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}"`}
        height={`${height - 4}px`}
        onClick={() => dispatch(select({}))}
      >
        {edges.map((edge) => (
          <Edge
            key={edge.id}
            edge={edge}
            origin={origin}
            selected={
              selection?.type === "edge" &&
              (selection.item as EdgeModel) === edge
            }
          />
        ))}
        {nodes.map((node) => (
          <Node
            key={node.id}
            origin={origin}
            node={node}
            selected={selection?.type === "node" && selection.item === node}
            sourcing={
              selection?.type === "node-slot" &&
              (selection.item as NodeSlotModel).source === node
                ? (selection?.item as NodeSlotModel)
                : undefined
            }
            select={(selection?: SelectionModel) =>
              dispatch(select(selection ? { next: selection } : {}))
            }
          />
        ))}
      </svg>
      {selection && <SelectionSwitch selection={selection} />}
    </div>
  );
}

export default App;
