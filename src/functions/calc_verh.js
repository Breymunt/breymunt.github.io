//Верх колон для склада та навіса без опори
import { prokat } from "../price_list";

export function calcVerhWithout(width, length) {
  const count = length / 3 + 2;
  const consts = getVerhConsts1(width);

  const verhAmount = count;

  const verhPrice = consts.prokat * verhAmount;

  console.log(`Верх колон ${consts.type} - ` + count + ` шт`);

  return verhPrice;
}

function getVerhConsts1(width) {
  if (width <= 18) {
    return {
      prokat: prokat["250x250x10"],
      type: "250x250x10",
    };
  } else if (width <= 24) {
    return {
      prokat: prokat["300x300x10"],
      type: "300x300x10",
    };
  } else if (width <= 30) {
    return {
      prokat: prokat["350x350x10"],
      type: "350x350x10",
    };
  }
}
