import * as React from "react";
import Icon from "./Icon";
import IconPropsModel from "./_models/IconProps";

function NodeSlotFlagIcon(props: IconPropsModel) {
  return (
    <Icon {...props} viewBox="0 0 128 128">
      <>
        <defs>
          <path
            d="M34.85 19.57C37.5 32.61 40.32 44.18 43.33 54.27C47.84 69.41 51.46 76 54.91 86.89C57.2 94.16 59.32 102.42 61.25 111.68L53.96 113.61C47.75 97.95 42.89 85.08 39.38 75C35.86 64.92 31.98 47.31 27.74 22.18L34.85 19.57Z"
            id="kmimFx5id"
          ></path>
          <path
            d="M50.93 38.1C52.57 45.18 51.81 54.14 48.62 64.98C63.76 66.86 76.77 65.23 87.65 60.11C98.54 54.99 107.2 41.04 113.62 18.28C101.85 21.65 89.82 21.69 77.54 18.39C65.25 15.09 52.53 15.96 39.38 20.98C45.43 25.31 49.28 31.02 50.93 38.1Z"
            id="b3ZoO9EDiD"
          ></path>
        </defs>
        <g>
          <g>
            <g>
              <use
                xlinkHref="#kmimFx5id"
                opacity="1"
                fill="#ffffff"
                fill-opacity="1"
              ></use>
              <g>
                <use
                  xlinkHref="#kmimFx5id"
                  opacity="1"
                  fill-opacity="0"
                  stroke="#444444"
                  stroke-width="5"
                  stroke-opacity="1"
                ></use>
              </g>
            </g>
            <g>
              <use
                xlinkHref="#b3ZoO9EDiD"
                opacity="1"
                fill="#f98a9b"
                fill-opacity="1"
              ></use>
              <g>
                <use
                  xlinkHref="#b3ZoO9EDiD"
                  opacity="1"
                  fill-opacity="0"
                  stroke="#444444"
                  stroke-width="5"
                  stroke-opacity="1"
                ></use>
              </g>
            </g>
          </g>
        </g>
      </>
    </Icon>
  );
}

export default NodeSlotFlagIcon;
