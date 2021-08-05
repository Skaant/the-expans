import RESSOURCES from "../_data/ressources";
import getTotalSystemsPuts from "./getTotalSystemsPuts";

describe("getTotalSystemsPuts", () => {
  it("no-param: should return an empty object on empty puts", () => {
    const total = getTotalSystemsPuts();
    expect(
      Object.values(RESSOURCES).every((ressourceId) => total[ressourceId] === 0)
    ).toEqual(true);
  });
});
