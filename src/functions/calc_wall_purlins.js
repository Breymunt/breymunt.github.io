//Стінова обрешітка
import { truba } from "../price_list";

function getWallPurlinsConsts(width, height) {
  if (width == 16) {
    return {
      h: height - 0.5 - 0.46 + 0.8,
      c: 48,
    };
  }
  if (width == 18) {
    return {
      h: height - 0.5 - 0.46 + 0.9,
      c: 60,
    };
  }
  if (width == 20) {
    return {
      h: height - 0.5 - 0.46 + 0.3,
      c: 96,
    };
  }
  if (width == 22) {
    return {
      h: height - 0.5 - 0.46 + 1.1,
      c: 72,
    };
  }
  if (width == 24) {
    return {
      h: height - 0.5 - 0.46 + 1.2,
      c: 84,
    };
  }
  if (width == 30) {
    return {
      h: height - 0.5 - 0.46 + 0.8,
      c: 120,
    };
  }
}

export function calcWallPurlins(width, length, height) {
  const consts = getWallPurlinsConsts(width, height);
  const count = Math.ceil(consts.h / 1.04 + 1);
  const p = (width + length) * 2;

  const wallPurlinsAmount = Math.ceil((p * count + consts.c + 36) / 12) * 12;

  const wallPurlinsPrice = truba["40x40x3"] * wallPurlinsAmount;

  console.log(`Стінових прогонів - ` + count + ` шт`);
  console.log(`Труба 40х40х3 - ${wallPurlinsAmount}` + ` м.п.;`);

  return wallPurlinsPrice;
}
