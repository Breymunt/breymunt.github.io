//Вартість робіт
import { work } from "../price_list";

export function calcWorkPrice(width, length, type) {
  function price(type) {
    if (type <= 2) {
      return {
        type: work["sklad"],
      };
    } else if (type <= 4) {
      return {
        type: work["navis"],
      };
    }
  }

  const tPrice = price(type);

  const square = width * length;

  const workPrice = tPrice.type * square;

  return workPrice;
}
