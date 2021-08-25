export enum ICON_SIZES {
  SM = "sm",
  MD = "md",
  LG = "lg",
}

export const ICON_SIZES_MODIFIER: { [key in ICON_SIZES]: number } = {
  [ICON_SIZES.SM]: 0.5,
  [ICON_SIZES.MD]: 1,
  [ICON_SIZES.LG]: 2,
};

type IconPropsModel = {
  size?: ICON_SIZES;
  x?: number;
  y?: number;
  fill?: string;
};

export default IconPropsModel;
