//Покрівельна обрешітка
import { shveler } from "../price_list";

function getRoofPurlinsConsts(width) {
  if (width == 16) {
    return {
      longCount: 12,
      stock: 24,
    };
  } else if (width == 18) {
    return {
      longCount: 14,
      stock: 24,
    };
  } else if (width == 20) {
    return {
      longCount: 16,
      stock: 24,
    };
  } else if (width == 22) {
    return {
      longCount: 16,
      stock: 24,
    };
  } else if (width == 24) {
    return {
      longCount: 18,
      stock: 24,
    };
  } else if (width == 30) {
    return {
      longCount: 22,
      stock: 24,
    };
  }
}

function getTypeShveler(snowArea) {
  if (snowArea <= 5) {
    return {
      sh: shveler[12],
      type: "Швелер №12",
    };
  } else if (snowArea == 6) {
    return {
      sh: shveler[14],
      type: "Швелер №14",
    };
  }
}

export function calcRoofPurlins(width, length, snowArea) {
  const count = getRoofPurlinsConsts(width);
  const consts = getTypeShveler(snowArea);

  const roofPurlineAmount = length * count.longCount + count.stock;

  const roofPurlinePrice = consts.sh * roofPurlineAmount;

  console.log(`Покрівельних прогонів - ` + count.longCount + ` шт`);
  console.log(`${consts.type} - ${roofPurlineAmount}` + ` м.п.;`);

  return roofPurlinePrice;
}
