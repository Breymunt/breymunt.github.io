//Витратні матеріали
import { materials } from "../price_list";

export function calcMaterials(width, length, type) {
  function cost(type) {
    if (type <= 2) {
      return {
        type: materials["sklad"],
      };
    } else if (type <= 4) {
      return {
        type: materials["navis"],
      };
    }
  }

  const tMaterials = cost(type);

  const square = width * length;

  const materialsPrice = Math.ceil((square * tMaterials.type) / 10000) * 10000;

  console.log(`Витратні матеріали - ${materialsPrice}` + ` грн`);

  return materialsPrice;
}
