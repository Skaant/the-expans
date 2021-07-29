import { BUILDINGS } from "../../_data/buildings";
import RESSOURCES from "../../_data/ressources";

type OutputItemType = 'static' | 'relative'
type OutputItemRelativeConstraints = 'adjacent'

type OutputItem = {
  ressourceId: RESSOURCES,
  type: OutputItemType,
  /** For `type === 'relative'`, `amount` is a coef
   * for `relativeTo` to be multiplied by. */
  amount: number,
  /** Only for `type === 'relative'`. */
  relativeTo?: RESSOURCES | BUILDINGS,
  /** Only for `type === 'relative'`. */
  constraints?: OutputItemRelativeConstraints[]
}

type BuildingDataModel = {
  id: BUILDINGS;
  name: string;
  radiusModifier?: number;
  strokeColor?: string;
  outputs?: OutputItem[]
};

export default BuildingDataModel;
