//Витратні матеріали
import { materials } from "../price_list";

export function calcMaterials(width, length) {
  const square = width * length;

  const materialsPrice = Math.ceil((square * materials.sklad) / 10000) * 10000;

  console.log(`Витратні матеріали - ${materialsPrice}` + ` грн`);

  return materialsPrice;
}
