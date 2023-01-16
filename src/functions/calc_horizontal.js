//Горизонтальні в'язи жорсткості
import { truba } from "../price_list";

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
  const x = getVerticalCount(length);

  let count;

  switch (width) {
    case 30:
      count = Math.ceil(length / 60);
      break;

    default:
      count = x.vertCount / 2;
  }

  const consts = getHorizontalConsts(width);

  const horizontalT1Amount =
    Math.ceil(
      ((length / 6) * consts.constant +
        length * consts.longCount +
        count * consts.horizontConsts +
        24) /
        12
    ) * 12;

  const horizontalT1Price = truba["60x60x3"] * horizontalT1Amount;

  console.log(`Горизонтальних в'язів жорсткості (змійок) - ` + count + ` шт`);
  console.log(`Поздовжніх - ` + consts.longCount + ` шт`);
  console.log(`Труба 60х60х3 - ${horizontalT1Amount}` + ` м.п.;`);

  return horizontalT1Price;
}
