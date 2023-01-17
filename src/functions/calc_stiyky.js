//Cтійки склади без опори
import { truba } from "../price_list";

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
