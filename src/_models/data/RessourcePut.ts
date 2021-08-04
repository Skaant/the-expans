import RESSOURCES from "../../_data/ressources";

/** `RessourcePut` represents the common radix between
 *  **inputs** and **outputs**. */
type ResourcePut = {
  ressourceId: RESSOURCES;
  amount: number;
};

export default ResourcePut;
