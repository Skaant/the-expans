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
  ABS = "abs",
  GENO = "geno",
}

export default RESSOURCES;
