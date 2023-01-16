//Вертикальні в'язи жорсткості
import { truba, prokat } from "../price_list";

function getVerticalCount(length) {
  if (length <= 30) {
    return {
      vertCount: 2,
    };
  } else if (length <= 54) {
    return {
      vertCount: 4,
    };
  } else if (length <= 78) {
    return {
      vertCount: 6,
    };
  } else if (length <= 108) {
    return {
      vertCount: 8,
    };
  } else if (length <= 114) {
    return {
      vertCount: 10,
    };
  } else if (length >= 120) {
    return {
      vertCount: 12,
    };
  }
}

export function calcVertical(length, height) {
  const heightK = height - 3.5;
  const count = getVerticalCount(length);

  const verticalTrubaAmount =
    Math.ceil(
      (Math.sqrt(Math.pow(heightK, 2) + Math.pow(6, 2)) * 2 * count.vertCount +
        24) /
        12
    ) * 12;
  const vertikalP300Amount = count.vertCount * 1;
  const vertikalP250Amount = count.vertCount * 4;

  const verticalTrubaPrice = truba["80x80x3"] * verticalTrubaAmount;
  const verticalP300Price = prokat["300x300x10"] * vertikalP300Amount;
  const verticalP250Price = prokat["250x250x10"] * vertikalP250Amount;

  console.log(`Вертикальних в'язів жорсткості - ` + count.vertCount + ` шт`);
  console.log(`Труба 80х80х3 - ${verticalTrubaAmount}` + ` м.п.;`);
  console.log(`Пластина 300х300х10 - ${vertikalP300Amount}` + ` шт;`);
  console.log(`Пластина 250х250х10 - ${vertikalP250Amount}` + ` шт;`);

  return verticalTrubaPrice + verticalP300Price + verticalP250Price;
}
