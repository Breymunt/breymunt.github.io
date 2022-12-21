import {
  arm,
  anker,
  truba,
  kutyk,
  shveler,
  prokat,
  proflist,
  samorez,
  dobor,
  kolona,
  uplotnitel,
  polik,
  reshitka,
  furnitura,
  beton,
  plita,
  work,
} from "./price_list";
import fermyznach from "./fermy";
import fermy_zapas from "./fermy_zapas";

export function calcSquare(width, length) {
  const square = width * length;

  return square;
}

//Вартість робіт
export function calcWork(width, length) {
  const square = width * length;

  const workPrice = work["sklad"] * square;

  return workPrice;
}

//Фундамент монолітний Фм1
function getFm1Consts(width) {
  if (width <= 20) {
    return {
      arm: 38.86,
      anker: 0,
      beton: 1.04,
    };
  } else if (width <= 24) {
    return {
      arm: 49.96,
      anker: 0,
      beton: 1.8,
    };
  } else if (width <= 30) {
    return {
      arm: 73.28,
      anker: 4,
      beton: 3.51,
    };
  }
}

export function calcFm1(width, length) {
  const count = length / 3 + 2;
  const consts = getFm1Consts(width);

  const arm12Amount = Math.ceil((count * consts.arm + 84) / 12) * 12;
  const ankerAmount = Math.ceil(count * consts.anker);
  const betonAmount = Math.ceil(count * consts.beton);

  const arm12Price = arm[12] * arm12Amount;
  const ankerPrice = anker[24] * ankerAmount;
  const betonPrice = beton * betonAmount;

  console.log(`Фундамент монолітний Фм1 - ` + count + ` шт`);
  console.log(`Арматура 12 - ${arm12Amount}` + ` м.п.;`);
  console.log(`Анкера - ${ankerAmount}` + ` шт;`);
  console.log(`Бетон - ${betonAmount}` + ` м3;`);

  return arm12Price + ankerPrice + betonPrice;
}

//Стірчковий фундамент
function getLentaConsts(width) {
  if (width <= 18) {
    return {
      arm: 2.72,
      beton: 0.56 * 0.9,
    };
  } else if (width <= 24) {
    return {
      arm: 2.83,
      beton: 0.615 * 0.9,
    };
  } else if (width <= 30) {
    return {
      arm: 2.93,
      beton: 0.665 * 0.9,
    };
  }
}

export function calcLenta(width, length) {
  const count = (width + length) * 2 - 12;
  const consts = getLentaConsts(width);

  const arm10Amount =
    Math.ceil((count * consts.arm * 2 + count * 10 + 84) / 12) * 12;
  const betonAmount = Math.ceil(count * consts.beton * 1.04);

  const arm10Price = arm[10] * arm10Amount;
  const betonPrice = beton * betonAmount;

  console.log(`Стрічковий фундамент - ` + count + ` м.п.`);
  console.log(`Арматура 10 - ${arm10Amount}` + ` м.п.;`);
  console.log(`Бетон - ${betonAmount}` + ` м3;`);

  return arm10Price + betonPrice;
}

//Конструкція бази колон
function getBazaConsts(width) {
  if (width <= 18) {
    return {
      kosynki: 4,
      type: "550x550x12",
      prokat: prokat["550x550x12"],
    };
  } else if (width <= 24) {
    return {
      kosynki: 6,
      type: "600x600x12",
      prokat: prokat["600x600x12"],
    };
  } else if (width <= 30) {
    return {
      kosynki: 6,
      type: "650x650x12",
      prokat: prokat["650x650x12"],
    };
  }
}

export function calcBaza(width, length) {
  const count = length / 3 + 2;
  const consts = getBazaConsts(width);

  const zakladAmount = count;
  const kosynkiAmount = count * consts.kosynki;

  const zakladPrice = consts.prokat * zakladAmount;
  const kosynkiPrice = prokat["200x150x10"] * kosynkiAmount;

  console.log(`Конструкція бази колон`);
  console.log(`Закладна пластина ${consts.type} - ${zakladAmount}` + ` шт;`);
  console.log(`Ребра жорсті - ${kosynkiAmount}` + ` шт;`);

  return zakladPrice + kosynkiPrice;
}

//Колони та стійки
function getKolonyConsts(width) {
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

export function calcKolony(width, length, height) {
  const count = length / 3 + 2;
  const consts = getKolonyConsts(width);

  const kolonyAmount = count;

  const totalKolonyAmount = Math.ceil(kolonyAmount * (height + 0.2));
  const kolonyPrice = consts.kolona * totalKolonyAmount;

  console.log(`Кількість колон - ` + count + ` шт`);
  console.log(`Колона ${consts.type} - ${totalKolonyAmount}` + ` м.п.;`);

  return kolonyPrice;
}

function getStiykyConsts(width) {
  if (width == 16) {
    return {
      s1: 9.4 + 24,
      s2: 3.2 - 10,
    };
  } else if (width == 18) {
    return {
      s1: 10.8 + 24,
      s2: 3.6 - 10,
    };
  } else if (width == 20) {
    return {
      s1: 11.64 + 24,
      s2: 5 - 10,
    };
  } else if (width == 22) {
    return {
      s1: 14.16 + 24,
      s2: 14.28 - 10,
    };
  } else if (width == 24) {
    return {
      s1: 15.6 + 24,
      s2: 10.8 - 10,
    };
  } else if (width == 30) {
    return {
      s1: 15.92 + 24,
      s2: 15.48 - 10,
    };
  }
}

function getStiykyCount(width) {
  if (width == 16) {
    return {
      s1: 8,
      s2: 2,
    };
  } else if (width == 18) {
    return {
      s1: 8,
      s2: 2,
    };
  } else if (width == 20) {
    return {
      s1: 8,
      s2: 2,
    };
  } else if (width == 22) {
    return {
      s1: 8,
      s2: 6,
    };
  } else if (width == 24) {
    return {
      s1: 8,
      s2: 6,
    };
  } else if (width <= 30) {
    return {
      s1: 8,
      s2: 10,
    };
  }
}

function getStiykyHeight(width) {
  if (width == 16) {
    return {
      s2: 0.81,
    };
  } else if (width == 18) {
    return {
      s2: 0.91,
    };
  } else if (width == 20) {
    return {
      s2: 0.33,
    };
  } else if (width == 22) {
    return {
      s2: 1.11,
    };
  } else if (width == 24) {
    return {
      s2: 1.21,
    };
  } else if (width == 30) {
    return {
      s2: 0.82,
    };
  }
}

export function calcStiyky(width, length, height) {
  const heighSt = getStiykyHeight(width);
  const countSt = getStiykyCount(width);
  const count = length / 3;
  const consts = getStiykyConsts(width);

  const s1Amount = Math.ceil((countSt.s1 * height + consts.s1 + 12) / 12) * 12;
  const s2Amount =
    Math.ceil(
      (count * (height + heighSt.s2) + (countSt.s2 * height + consts.s2) + 12) /
        12
    ) * 12;

  const s1Price = truba["100x100x3"] * s1Amount;
  const s2Price = truba["80x80x3"] * s2Amount;

  console.log(`Стійка 100х100х3 - ${s1Amount}` + ` м.п.;`);
  console.log(`Стійка 80х80х3 - ${s2Amount}` + ` м.п.;`);

  return s1Price + s2Price;
}

//Верх колон
function getVerhConsts(width) {
  if (width <= 18) {
    return {
      prokat: prokat["250x250x10"],
      type: "250x250x10",
    };
  } else if (width <= 24) {
    return {
      prokat: prokat["300x300x10"],
      type: "300x300x10",
    };
  } else if (width <= 30) {
    return {
      prokat: prokat["350x350x10"],
      type: "350x350x10",
    };
  }
}

export function calcVerh(width, length) {
  const count = length / 3 + 2;
  const consts = getVerhConsts(width);

  const verhAmount = count;

  const verhPrice = consts.prokat * verhAmount;

  console.log(`Верх колон ${consts.type} - ` + count + ` шт`);

  return verhPrice;
}

//Вертикальні в'язи жорсткості
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

//Кроквяні ферми
function getFermyConsts1(width, snowArea) {
  return fermyznach[width][`SA${snowArea}`];
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

//Горизонтальні в'язи жорсткості
function getHorizontalCount(width, length) {
  if (width <= 24) {
    return {
      horizontCount: 4,
    };
  } else if (width == 30) {
    return {
      horizontCount: Math.ceil(length / 60),
    };
  }
}

function getHorizontalConsts(width) {
  if (width == 16) {
    return {
      horizontConsts: 48,
      constant: 0,
      longCount: 4,
    };
  } else if (width == 18) {
    return {
      horizontConsts: 60,
      constant: 0,
      longCount: 4,
    };
  } else if (width == 20) {
    return {
      horizontConsts: 54,
      constant: 0,
      longCount: 4,
    };
  } else if (width == 22) {
    return {
      horizontConsts: 62,
      constant: 0,
      longCount: 4,
    };
  } else if (width == 24) {
    return {
      horizontConsts: 74,
      constant: 0,
      longCount: 6,
    };
  } else if (width == 30) {
    return {
      horizontConsts: 36,
      constant: 19.75,
      longCount: 5,
    };
  }
}

export function calcHorizontal(width, length) {
  const consts = getHorizontalConsts(width);
  const count = getVerticalCount(length);

  const horizontalT1Amount =
    Math.ceil(
      ((length / 6) * consts.constant +
        length * consts.longCount +
        (count.vertCount / 2) * consts.horizontConsts +
        24) /
        12
    ) * 12;

  const horizontalT1Price = truba["60x60x3"] * horizontalT1Amount;

  console.log(
    `Горизонтальних в'язів жорсткості (змійок) - ` + count.vertCount / 2 + ` шт`
  );
  console.log(`Поздовжніх - ` + consts.longCount + ` шт`);
  console.log(`Труба 60х60х3 - ${horizontalT1Amount}` + ` м.п.;`);

  return horizontalT1Price;
}

//Покрівельна обрешітка
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

//Стінова обрешітка
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

//Вентиляційне вікно
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

//Конструкція воріт
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
//Профнастил покрівельний
function getRoofConsts(width) {
  if (width == 16) {
    return {
      l: 8.54,
      k: 0.219,
    };
  } else if (width == 18) {
    return {
      l: 9.55,
      k: 0.219,
    };
  } else if (width == 20) {
    return {
      l: 10.74,
      k: 0.273,
    };
  } else if (width == 22) {
    return {
      l: 11.56,
      k: 0.273,
    };
  } else if (width == 24) {
    return {
      l: 12.86,
      k: 0.273,
    };
  } else if (width == 30) {
    return {
      l: 15.9,
      k: 0.325,
    };
  }
}

//Профнастил стіновий
function getWallConsts(width) {
  if (width == 16) {
    return {
      c: 5.71,
      h: 0.8,
      k: 0.219,
    };
  } else if (width == 18) {
    return {
      c: 5.71,
      h: 0.9,
      k: 0.219,
    };
  } else if (width == 20) {
    return {
      c: 12.41,
      h: 0.3,
      k: 0.273,
    };
  } else if (width == 22) {
    return {
      c: 5.71,
      h: 1.1,
      k: 0.273,
    };
  } else if (width == 24) {
    return {
      c: 5.71,
      h: 1.2,
      k: 0.273,
    };
  } else if (width == 30) {
    return {
      c: 6.47,
      h: 0.8,
      k: 0.325,
    };
  }
}

export function calcSheathings(width, length, height) {
  //Профнастил покрівельний

  const constsR = getRoofConsts(width);
  const countR = Math.ceil((length + constsR.k) / 0.99) * 2;

  const sheetRoofAmount = Math.ceil(countR * constsR.l * 1.04);

  const sheetRoofPrice = proflist["60-05"] * sheetRoofAmount;

  console.log(`Покрівельний профлист 60-05 - ${sheetRoofAmount}` + ` м2`);

  //Профнастил стіновий

  const constsW = getWallConsts(width);

  //Найбільший торцевий лист
  const sheetBiggestT =
    Math.tan((Math.PI / 180) * constsW.c) * (width / 2) +
    constsW.h +
    height -
    0.46 +
    0.14;

  //Кількість торцевих листів
  const numberSheetT = Math.ceil(width / 2 / 1.1);

  //Зменшення торцевих листів
  const sheetReductionT = Math.tan((Math.PI / 180) * constsW.c) * 1.1;

  //Найменший торцевий лист
  const sheetLeastT = sheetBiggestT - sheetReductionT * (numberSheetT - 1);
  const sheetAmountT = (sheetBiggestT + sheetLeastT) * (numberSheetT / 2) * 4;
  const sheetLengthB = height + constsW.h - 0.46 - 0.5;
  const sheetAmountB = Math.ceil((length + constsW.k) / 1.1) * 2 * sheetLengthB;

  const sheetTotalAmount = Math.ceil(
    (sheetAmountT + sheetAmountB + 5.52) * 1.15
  );
  const sheetWallPrice = proflist["20-045"] * sheetTotalAmount;
  console.log(`Стіновий профлист 20-045 - ${sheetTotalAmount}` + ` м2`);

  //Ущільнювач

  const countS = Math.ceil((length + constsR.k) / 0.99 + 1);
  const sealantAmount = Math.ceil((countS * constsR.l * 2) / 30) * 30 + 60;

  const sealantPrice = uplotnitel * sealantAmount;

  console.log(`Ущільнювач - ${sealantAmount}` + ` м.п.`);

  //Добірні елементи

  const veterAmount = Math.ceil(constsR.l / 1.9) * 4;
  const torecAmount = Math.ceil((height + constsW.h) / 1.9) * 4;
  const pPlankaAmount = Math.ceil((length + constsW.k) / 1.9) * 2;
  const konekAmount = Math.ceil((length + constsW.k) / 1.9) + 1;
  const torecVorotAmount = 24;
  const plankaVorotAmount = 14;
  const plankyAmount =
    veterAmount +
    torecAmount +
    pPlankaAmount +
    konekAmount +
    torecVorotAmount +
    plankaVorotAmount;

  const veterPrice = dobor["veter"] * veterAmount;
  const torecPrice = dobor["torec"] * torecAmount;
  const pPlankaPrice = dobor["pPlanka"] * pPlankaAmount;
  const konekPrice = dobor["konek"] * konekAmount;
  const torecVorotPrice = dobor["torecVorot"] * torecVorotAmount;
  const plankaVorotPrice = dobor["plankaVorot"] * plankaVorotAmount;
  const doborPrice =
    veterPrice +
    torecPrice +
    pPlankaPrice +
    konekPrice +
    torecVorotPrice +
    plankaVorotPrice;

  console.log(`Добірних планок - ${plankyAmount}` + ` шт`);
  console.log(`Вітрова планка - ${veterAmount}` + ` шт`);
  console.log(`Торцева планка - ${torecAmount}` + ` шт`);
  console.log(`П-планка - ${pPlankaAmount}` + ` шт`);
  console.log(`Коньок - ${konekAmount}` + ` шт`);
  console.log(`Торцева планка воріт - ${torecVorotAmount}` + ` шт`);
  console.log(`Планка воріт - ${plankaVorotAmount}` + ` шт`);

  //Саморізи

  const profListAmount = sheetTotalAmount + sheetRoofAmount;
  const polikAmount = length * 2 + 2;

  const metalAmount =
    Math.ceil(
      (sheetRoofAmount * 4 + sheetTotalAmount * 6 + polikAmount * 11) / 250
    ) * 250;
  const derevoAmount =
    Math.ceil((profListAmount * 3 + plankyAmount * 12) / 250) * 250;

  const metalPrice = samorez["metal"] * metalAmount;
  const derevoPrice = samorez["derevo"] * derevoAmount;
  const samorezyPrice = metalPrice + derevoPrice;

  console.log(`Саморізи по металу - ${metalAmount}` + ` шт`);
  console.log(`Саморізи по дереву - ${derevoAmount}` + ` шт`);

  return (
    sheetRoofPrice + sheetWallPrice + sealantPrice + doborPrice + samorezyPrice
  );
}

//Підпірна стінка

//Витратні матеріали
export function materials(width, length) {
  const square = width * length;

  const materialsPrice = Math.ceil((square * 75) / 10000) * 10000;

  console.log(`Витратні матеріали - ${materialsPrice}` + ` грн`);

  return materialsPrice;
}
