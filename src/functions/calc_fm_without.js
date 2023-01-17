//Фундамент для склада та навіса без опори
import { arm, anker, beton } from "../price_list";

export function calcFm1Storage(width, length) {
  const count = length / 3 + 2;
  const consts = getFm1Consts(width);
  const stock = getStock(width);

  const arm12Amount =
    Math.ceil((count * consts.arm + stock.s * 8 + 84) / 12) * 12;
  const ankerAmount = Math.ceil(count * consts.anker);
  const betonAmount = Math.ceil(count * consts.beton + stock.s * 0.13);
  const arm12Price = arm[12] * arm12Amount;
  const ankerPrice = anker[24] * ankerAmount;
  const betonPrice = beton * betonAmount;

  console.log(`Фундамент монолітний Фм1 - ` + count + ` шт`);
  console.log(`Арматура 12 - ${arm12Amount}` + ` м.п.;`);
  console.log(`Анкера - ${ankerAmount}` + ` шт;`);
  console.log(`Бетон - ${betonAmount}` + ` м3;`);

  return arm12Price + ankerPrice + betonPrice;
}

export function calcFm1Canopy(width, length) {
  const count = length / 3 + 2;
  const consts = getFm1Consts(width);
  const stock = getStock(width);

  const arm12Amount = Math.ceil((count * consts.arm + 84) / 12) * 12;
  const ankerAmount = Math.ceil(count * consts.anker);
  const betonAmount = Math.ceil(count * consts.beton);
  const arm12Price = arm[12] * arm12Amount;
  const ankerPrice = anker[24] * ankerAmount;
  const betonPrice = beton * betonAmount;

  console.log(`Фундамент монолітний Фм1 - ` + count + ` шт`);
  console.log(`Арматура 12 - ${arm12Amount}` + ` м.п.;`);
  console.log(`Анкера - ${ankerAmount}` + ` шт;`);
  console.log(`Бетон - ${betonAmount}` + ` м3;`);

  return arm12Price + ankerPrice + betonPrice;
}

function getStock(width) {
  if (width == 16) {
    return {
      s: 8,
    };
  } else if (width == 18) {
    return {
      s: 8,
    };
  } else if (width == 20) {
    return {
      s: 8,
    };
  } else if (width == 22) {
    return {
      s: 8,
    };
  } else if (width == 24) {
    return {
      s: 8,
    };
  } else if (width == 30) {
    return {
      s: 8,
    };
  }
}

function getFm1Consts(width) {
  if (width <= 20) {
    return {
      arm: 38.86,
      anker: 0,
      beton: 1.04,
    };
  } else if (width <= 24) {
    return {
      arm: 49.96,
      anker: 0,
      beton: 1.8,
    };
  } else if (width <= 30) {
    return {
      arm: 73.28,
      anker: 4,
      beton: 3.51,
    };
  }
}
