//Вартість робіт
import { work } from "../price_list";

export function calcWorkPrice(width, length, type) {
  let tPrice = null;

  if (type <= 2) {
    tPrice = work.sklad;
  } else if (type <= 4) {
    tPrice = work.navis;
  }

  const square = width * length;

  const price = tPrice.find((item) => {
    return item.maxSquare >= square || item.maxSquare == -1;
  });

  console.log(price);

  return price.price * square;
}
