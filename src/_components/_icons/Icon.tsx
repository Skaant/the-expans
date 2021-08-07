import React from "react";
import { BASE_NODE_RADIUS } from "../../_data/primordials";
import IconPropsModel, {
  ICON_SIZES,
  ICON_SIZES_MODIFIER,
} from "./_models/IconProps";

function Icon({
  size = ICON_SIZES.MD,
  x,
  y,
  path,
}: IconPropsModel & { path: string }) {
  const value = ICON_SIZES_MODIFIER[size] * BASE_NODE_RADIUS * 0.8;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={x - value / 2}
      y={y - value / 2}
      height={value}
      width={value}
      viewBox={`0 0 512 512`}
    >
      <path d={path} fill="#fff" fillOpacity="1"></path>
    </svg>
  );
}

export default Icon;
