//Колони на склади без опори
import { kolona } from "../price_list";

export function calcKolonyWithout(width, length, height) {
  const count = length / 3 + 2;
  const consts = getKolonyConsts1(width);

  const kolonyAmount = count;

  const totalKolonyAmount = Math.ceil(kolonyAmount * (height + 0.2));
  const kolonyPrice = consts.kolona * totalKolonyAmount;

  console.log(`Кількість колон - ` + count + ` шт`);
  console.log(`Колона ${consts.type} - ${totalKolonyAmount}` + ` м.п.;`);

  return kolonyPrice;
}

function getKolonyConsts1(width) {
  if (width <= 18) {
    return {
      kolona: kolona[219],
      type: 219,
    };
  } else if (width <= 24) {
    return {
      kolona: kolona[273],
      type: 273,
    };
  } else if (width <= 30) {
    return {
      kolona: kolona[325],
      type: 325,
    };
  }
}
