import RessourceDataModel from "../_models/data/Ressource";

enum RESSOURCES {
  // TIER 1
  /** Water.
   *
   * Noted as the base YIN.
   *
   * *Used to create buildings
   *  and to feed ZUMS.* */
  WA = "wa",
  /** Material energy.
   *
   * Noted as the base YANG.
   *
   * *Used to create base buildings
   *  and to feed ZUMS.*
   */
  JING = "jing",
  /** ZUMS
   *
   * Noted as the base BALANCE. */
  ZUMS = "zums",
  // TIER 2
  SPARK = "spark",
  DATA = "data",
  FAITH = "faith",
  // TIER 3
  GENO = "geno",
  ABS = "abs",
}

export default RESSOURCES;

export const RESSOURCES_DATA: { [key in RESSOURCES]: RessourceDataModel } = {
  [RESSOURCES.WA]: {
    id: RESSOURCES.WA,
    color: "#34a0a4",
  },
  [RESSOURCES.JING]: {
    id: RESSOURCES.JING,
    color: "#dc2f02",
  },
  [RESSOURCES.ZUMS]: {
    id: RESSOURCES.ZUMS,
    color: "#bfd200",
  },
  [RESSOURCES.SPARK]: {
    id: RESSOURCES.SPARK,
    color: "",
  },
  [RESSOURCES.DATA]: {
    id: RESSOURCES.DATA,
    color: "",
  },
  [RESSOURCES.FAITH]: {
    id: RESSOURCES.FAITH,
    color: "",
  },
  [RESSOURCES.GENO]: {
    id: RESSOURCES.GENO,
    color: "",
  },
  [RESSOURCES.ABS]: {
    id: RESSOURCES.ABS,
    color: "",
  },
};
