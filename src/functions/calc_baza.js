//База колон для склада та навіса без опори
import { prokat } from "../price_list";

function getBazaConsts(width) {
  if (width <= 18) {
    return {
      kosynki: 4,
      type: "550x550x12",
      prokat: prokat["550x550x12"],
    };
  } else if (width <= 24) {
    return {
      kosynki: 6,
      type: "600x600x12",
      prokat: prokat["600x600x12"],
    };
  } else if (width <= 30) {
    return {
      kosynki: 6,
      type: "650x650x12",
      prokat: prokat["650x650x12"],
    };
  }
}

export function calcBaza(width, length) {
  const count = length / 3 + 2;
  const consts = getBazaConsts(width);

  const zakladAmount = count;
  const kosynkiAmount = count * consts.kosynki;

  const zakladPrice = consts.prokat * zakladAmount;
  const kosynkiPrice = prokat["200x150x10"] * kosynkiAmount;

  console.log(`Конструкція бази колон`);
  console.log(`Закладна пластина ${consts.type} - ${zakladAmount}` + ` шт;`);
  console.log(`Ребра жорсті - ${kosynkiAmount}` + ` шт;`);

  return zakladPrice + kosynkiPrice;
}
