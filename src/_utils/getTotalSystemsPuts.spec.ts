import RESSOURCES from "../_data/ressources";
import getTotalSystemsPuts from "./getTotalSystemsPuts";

describe("getTotalSystemsPuts", () => {
  it("no-param: should return an empty object on empty puts", () => {
    const total = getTotalSystemsPuts();
    expect(
      Object.values(RESSOURCES).every((ressourceId) => total[ressourceId] === 0)
    ).toEqual(true);
  });
  it(
    "complete-case: should return an array with the sum of " +
      "all inputs and outputs amounts, by ressource id",
    () => {
      const total = getTotalSystemsPuts([
        {
          inputs: [
            {
              ressourceId: RESSOURCES.JING,
              amount: 2,
            },
          ],
          outputs: [
            {
              ressourceId: RESSOURCES.WA,
              amount: 4,
            },
          ],
        },
        {
          inputs: [
            {
              ressourceId: RESSOURCES.ZUMS,
              amount: 3,
            },
          ],
        },
        {
          outputs: [
            {
              ressourceId: RESSOURCES.JING,
              amount: 5,
            },
          ],
        },
        {
          inputs: [
            {
              ressourceId: RESSOURCES.WA,
              amount: 2,
            },
            {
              ressourceId: RESSOURCES.JING,
              amount: 1,
            },
          ],
          outputs: [
            {
              ressourceId: RESSOURCES.ZUMS,
              amount: 2,
            },
            {
              ressourceId: RESSOURCES.JING,
              amount: 3,
            },
          ],
        },
      ]);
      expect(total[RESSOURCES.WA]).toEqual(2);
      expect(total[RESSOURCES.JING]).toEqual(5);
      expect(total[RESSOURCES.ZUMS]).toEqual(-1);
    }
  );
});
