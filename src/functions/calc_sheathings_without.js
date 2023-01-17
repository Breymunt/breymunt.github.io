//Профнастил покрівельний без опори
import { proflist, samorez, dobor, uplotnitel } from "../price_list";

//Склад без опори

export function calcSheathingsSWOS(width, length, height) {
  //Профнастил покрівельний

  const constsR = getRoofConstsS(width);
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

//Навіс без опори

export function calcSheathingsCWOS(width, length) {
  //Профнастил покрівельний

  const constsR = getRoofConstsC(width);
  const countR = Math.ceil((length + constsR.k) / 0.99) * 2;

  const sheetRoofAmount = Math.ceil(countR * constsR.l * 1.04);

  const sheetRoofPrice = proflist["60-05"] * sheetRoofAmount;

  console.log(`Покрівельний профлист 60-05 - ${sheetRoofAmount}` + ` м2`);

  //Ущільнювач

  const countS = Math.ceil((length + constsR.k) / 0.99 + 1);
  const sealantAmount = Math.ceil((countS * constsR.l * 2) / 30) * 30 + 60;

  console.log(`Ущільнювач - ${sealantAmount}` + ` м.п.`);

  //Добірні елементи

  const constsW = getWallConsts(width);

  const veterAmount = Math.ceil(constsR.l / 1.9) * 4;
  const pPlankaAmount = Math.ceil((length + constsW.k) / 1.9) * 2;
  const konekAmount = Math.ceil((length + constsW.k) / 1.9) + 1;
  const plankyAmount = veterAmount + pPlankaAmount + konekAmount;

  const veterPrice = dobor["veter"] * veterAmount;
  const pPlankaPrice = dobor["pPlanka"] * pPlankaAmount;
  const konekPrice = dobor["konek"] * konekAmount;
  const doborPrice = veterPrice + pPlankaPrice + konekPrice;

  console.log(`Добірних планок - ${plankyAmount}` + ` шт`);
  console.log(`Вітрова планка - ${veterAmount}` + ` шт`);
  console.log(`П-планка - ${pPlankaAmount}` + ` шт`);
  console.log(`Коньок - ${konekAmount}` + ` шт`);

  //Саморізи

  const profListAmount = sheetRoofAmount;

  const metalAmount = Math.ceil((sheetRoofAmount * 4) / 250) * 250;
  const derevoAmount =
    Math.ceil((profListAmount * 3 + plankyAmount * 12) / 250) * 250;

  const metalPrice = samorez["metal"] * metalAmount;
  const derevoPrice = samorez["derevo"] * derevoAmount;
  const samorezyPrice = metalPrice + derevoPrice;

  console.log(`Саморізи по металу - ${metalAmount}` + ` шт`);
  console.log(`Саморізи по дереву - ${derevoAmount}` + ` шт`);

  return sheetRoofPrice + doborPrice + samorezyPrice;
}

function getRoofConstsS(width) {
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

function getRoofConstsC(width) {
  if (width == 16) {
    return {
      l: 8.29,
      k: 0.219,
    };
  } else if (width == 18) {
    return {
      l: 9.3,
      k: 0.219,
    };
  } else if (width == 20) {
    return {
      l: 10.49,
      k: 0.273,
    };
  } else if (width == 22) {
    return {
      l: 11.31,
      k: 0.273,
    };
  } else if (width == 24) {
    return {
      l: 12.61,
      k: 0.273,
    };
  } else if (width == 30) {
    return {
      l: 15.65,
      k: 0.325,
    };
  }
}

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
