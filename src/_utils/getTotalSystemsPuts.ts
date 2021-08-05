import RESSOURCES from "../_data/ressources";
import SystemPuts from "../_models/data/SystemPuts";

function getTotalSystemsPuts(puts: SystemPuts[] = []) {
  return puts.reduce(
    (total, put) => {
      put.inputs?.forEach(
        (input) => (total[input.ressourceId] -= input.amount)
      );
      put.outputs?.forEach(
        (output) => (total[output.ressourceId] += output.amount)
      );
      return total;
    },
    Object.values(RESSOURCES).reduce(
      (ressources, ressourceId) => ({
        ...ressources,
        [ressourceId]: 0,
      }),
      {} as { [value in RESSOURCES]: number }
    )
  );
}

export default getTotalSystemsPuts;
