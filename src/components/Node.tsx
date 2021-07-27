import * as React from "react";
import INode from "../_interfaces/Node";
import IOrigin from "../_interfaces/Origin";

function Node({node, origin}: { node:INode, origin: IOrigin }) {
  const { x: oX, y: oY} = origin
  const { id, x: nX, y: nY} = node
  const x = oX + nX;
  const y = oY + nY;
  return <g>
    <text x={x} y={y - 70} textAnchor="middle">{id}</text>
    <circle cx={x} cy={y} r={50} style={{color: 'white'}}/>
  </g>
}

export default Node