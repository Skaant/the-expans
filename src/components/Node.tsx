import * as React from "react";
import INode from "../_interfaces/Node";
import IOrigin from "../_interfaces/Origin";

function Node({
  node, origin, selected, select
}: { node:INode, origin: IOrigin, selected: boolean, select: (selected?: INode) => void }) {
  const { x: oX, y: oY} = origin
  const { id, x: nX, y: nY} = node
  const x = oX + nX;
  const y = oY + nY;
  return <g onClick={() => select(node)}>
    <text x={x} y={y - 70} textAnchor="middle">{id}</text>
    <circle cx={x} cy={y} r={50} style={selected ? {stroke: 'red', strokeWidth: 5} : {}}/>
  </g>
}

export default Node