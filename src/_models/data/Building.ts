import { BUILDINGS } from "../../_data/buildings";
import RESSOURCES from "../../_data/ressources";

type ItemRelativeConstraints =
  /** `adjacent` can be used both with
   *  `BUILDINGS` and `RESSOURCES`.
   *
   * In the case of `RESSOURCES`, it should
   *  check adjacent nodes' output.
   *
   * @note We should see appear `adjacent-n`
   */
  | "adjacent"
  /** can be used both with
   *  `BUILDINGS` and `RESSOURCES`.
   *
   * `network` should check presence of wether
   *  `BUILDINGS` and `RESSOURCES` presence on
   *  edge network. */
  | "network";

type InputItem = {
  ressourceId: RESSOURCES;
  amount: number;
  constraints?: ItemRelativeConstraints;
};

type OutputItemType = "static" | "relative";

type OutputItem = {
  ressourceId: RESSOURCES;
  type: OutputItemType;
  /** For `type === 'relative'`, `amount` is a coef
   * for `relativeTo` to be multiplied by. */
  amount: number;
  /** Only for `type === 'relative'`. */
  relativeTo?: RESSOURCES | BUILDINGS;
  constraints?: ItemRelativeConstraints[];
};

type BuildingDataModel = {
  id: BUILDINGS;
  name: string;
  description?: string;
  radiusModifier?: number;
  strokeColor?: string;
  inputs?: InputItem[];
  outputs?: OutputItem[];
};

export default BuildingDataModel;
