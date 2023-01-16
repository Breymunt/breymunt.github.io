//Конструкція воріт
import { truba, furnitura } from "../price_list";

function getGatesConsts(width) {
  if (width <= 30) {
    return {
      g: 2,
    };
  }
}

export function calcGates(width) {
  const consts = getGatesConsts(width);

  const trubaAmount = consts.g * 72;
  const furnituraAmount = consts.g;

  const trubaPrice = truba["60x60x3"] * trubaAmount;
  const furnituraPrice = furnitura * furnituraAmount;

  console.log(`Ворта - ${consts.g}` + ` шт`);
  console.log(`Труба 60х60х3 - ${trubaAmount}` + ` м.п.;`);
  console.log(`Фурнітура - ${furnituraAmount}` + ` шт;`);

  return trubaPrice + furnituraPrice;
}
