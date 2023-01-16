//Вентиляційне вікно
import { truba, polik, reshitka } from "../price_list";

function getReshitkyConsts(width) {
  if (width <= 24) {
    return {
      r: 4,
    };
  } else if (width == 30) {
    return {
      r: 6,
    };
  }
}

export function calcVenting(width, length) {
  const count = length / 1.5 + 2;
  const consts = getReshitkyConsts(width);

  const trubaAmount = Math.ceil((count * 1.6 + length * 6 + 24) / 12) * 12;
  const polikAmount = length * 2 + 2;
  const reshitkaAmount = consts.r;

  const trubaPrice = truba["40x40x3"] * trubaAmount;
  const polikPrice = polik * polikAmount;
  const reshitkaPrice = reshitka * reshitkaAmount;

  console.log("Конструкція вентиляційної системи");
  console.log(`Труба 40х40х3 - ${trubaAmount}` + ` м.п.;`);
  console.log(`Полікарбонат - ${polikAmount}` + ` м.п.;`);
  console.log(`Вент.решітка - ${reshitkaAmount}` + ` шт;`);

  return trubaPrice + polikPrice + reshitkaPrice;
}
