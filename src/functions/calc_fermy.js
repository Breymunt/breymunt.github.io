//Кроквяні ферми
import { truba, prokat } from "../price_list";
import fermy_znach_swos from "./fermy/fermy_znach_swos";
import fermy_zapas_swos from "./fermy/fermy_zapas_swos";
import fermy_znach_cwos from "./fermy/fermy_znach_cwos";
import fermy_zapas_cwos from "./fermy/fermy_zapas_cwos";

//Склад без опори
export function calcFermySWOS(width, length, snowArea) {
  const count = length / 6 + 1;
  const consts1 = getFermyConstsSWOS1(width, snowArea);
  const consts2 = getFermyConstsSWOS2(width, snowArea);

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

  const prokatConsts = getProkatConstsWithout(width);
  const prokatCount = getTypeProkatWithout(snowArea);

  const prokatAmount = count * prokatConsts.p;

  const prokatPrice = prokatCount.p * prokatAmount;

  console.log(`${prokatCount.type} - ${prokatAmount}` + ` м2;`);

  return sum + prokatPrice;
}

function getFermyConstsSWOS1(width, snowArea) {
  return fermy_znach_swos[width][`SA${snowArea}`];
}

function getFermyConstsSWOS2(width, snowArea) {
  return fermy_zapas_swos[width][`SA${snowArea}`];
}

//Навіс без опори
export function calcFermyCWOS(width, length, snowArea) {
  const count = length / 6 + 1;
  const consts1 = getFermyConstsCWOS1(width, snowArea);
  const consts2 = getFermyConstsCWOS2(width, snowArea);

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

  const prokatConsts = getProkatConstsWithout(width);
  const prokatCount = getTypeProkatWithout(snowArea);

  const prokatAmount = count * prokatConsts.p;

  const prokatPrice = prokatCount.p * prokatAmount;

  console.log(`${prokatCount.type} - ${prokatAmount}` + ` м2;`);

  return sum + prokatPrice;
}

function getFermyConstsCWOS1(width, snowArea) {
  return fermy_znach_cwos[width][`SA${snowArea}`];
}

function getFermyConstsCWOS2(width, snowArea) {
  return fermy_zapas_cwos[width][`SA${snowArea}`];
}

function getProkatConstsWithout(width) {
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

function getTypeProkatWithout(snowArea) {
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
