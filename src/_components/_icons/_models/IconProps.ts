import Coords from "../../../_models/Coords";

export enum ICON_SIZES {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export const ICON_SIZES_MODIFIER: { [key in ICON_SIZES]: number } = {
  [ICON_SIZES.SM]: 1,
  [ICON_SIZES.MD]: 2,
  [ICON_SIZES.LG]: 4,
};

type IconPropsModel = {
  size?: ICON_SIZES;
} & Coords;

export default IconPropsModel;
