//Кроквяні ферми
import { truba, prokat } from "../price_list";
import fermy_znach from "./fermy/fermy";
import fermy_zapas from "./fermy/fermy_zapas";

function getFermyConsts1(width, snowArea) {
  return fermy_znach[width][`SA${snowArea}`];
}

function getFermyConsts2(width, snowArea) {
  return fermy_zapas[width][`SA${snowArea}`];
}

function getProkatConsts(width) {
  if (width < 30) {
    return {
      p: 0,
    };
  } else if (width == 30) {
    return {
      p: 1.5,
    };
  }
}

function getTypeProkat(snowArea) {
  if (snowArea <= 5) {
    return {
      p: prokat["5mm"],
      type: "Прокат 5мм",
    };
  } else if (snowArea == 6) {
    return {
      p: prokat["6mm"],
      type: "Прокат 6мм",
    };
  }
}

export function calcFermy(width, length, snowArea) {
  const count = length / 6 + 1;
  const consts1 = getFermyConsts1(width, snowArea);
  const consts2 = getFermyConsts2(width, snowArea);

  let sum = 0;

  console.log(`Ферма ` + width + `м - ` + count + ` шт`);

  for (let key in consts1) {
    sum +=
      Math.ceil((consts1[key] * count + consts2[key]) / 12) * 12 * truba[key];
    console.log(
      `${key} = ${Math.ceil((consts1[key] * count + consts2[key]) / 12) * 12}` +
        ` м.п.`
    );
  }

  const prokatConsts = getProkatConsts(width);
  const prokatCount = getTypeProkat(snowArea);

  const prokatAmount = count * prokatConsts.p;

  const prokatPrice = prokatCount.p * prokatAmount;

  console.log(`${prokatCount.type} - ${prokatAmount}` + ` м2;`);

  return sum + prokatPrice;
}
