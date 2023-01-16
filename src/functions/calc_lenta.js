//Стрічковий фундамент для склада без опори
import { arm, beton } from "../price_list";

function getLentaConsts(width) {
  if (width <= 18) {
    return {
      arm: 2.72,
      beton: 0.56 * 0.9,
    };
  } else if (width <= 24) {
    return {
      arm: 2.83,
      beton: 0.615 * 0.9,
    };
  } else if (width <= 30) {
    return {
      arm: 2.93,
      beton: 0.665 * 0.9,
    };
  }
}

export function calcLenta(width, length) {
  const count = (width + length) * 2 - 12;
  const consts = getLentaConsts(width);

  const arm10Amount =
    Math.ceil((count * consts.arm * 2 + count * 10 + 84) / 12) * 12;
  const betonAmount = Math.ceil(count * consts.beton * 1.04);

  const arm10Price = arm[10] * arm10Amount;
  const betonPrice = beton * betonAmount;

  console.log(`Стрічковий фундамент - ` + count + ` м.п.`);
  console.log(`Арматура 10 - ${arm10Amount}` + ` м.п.;`);
  console.log(`Бетон - ${betonAmount}` + ` м3;`);

  return arm10Price + betonPrice;
}
