import React, { ReactElement } from "react";
import { BASE_ICON_SIZE } from "../../_data/primordials";
import IconPropsModel, {
  ICON_SIZES,
  ICON_SIZES_MODIFIER,
} from "./_models/IconProps";

function Icon({
  size = ICON_SIZES.MD,
  x = 0,
  y = 0,
  fill = "white",
  path,
  viewBox = "0 0 512 512",
  children,
}: IconPropsModel & {
  path?: string;
  viewBox?: string;
  children?: ReactElement;
}) {
  const value = ICON_SIZES_MODIFIER[size] * BASE_ICON_SIZE;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x={x - value / 2}
      y={y - value / 2}
      height={value}
      width={value}
      viewBox={viewBox}
    >
      {path ? <path d={path} fill={fill} fillOpacity="1"></path> : children}
    </svg>
  );
}

export default Icon;
