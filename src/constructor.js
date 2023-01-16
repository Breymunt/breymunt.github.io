import { calcFm1 } from "./functions/calc_fm";
import { calcLenta } from "./functions/calc_lenta";
import { calcBaza } from "./functions/calc_baza";
import { calcKolony } from "./functions/calc_kolony";
import { calcStiyky } from "./functions/calc_stiyky";
import { calcVerh } from "./functions/calc_verh";
import { calcVertical } from "./functions/calc_vertical";
import { calcFermy } from "./functions/calc_fermy";
import { calcHorizontal } from "./functions/calc_horizontal";
import { calcRoofPurlins } from "./functions/calc_roof_purlins";
import { calcWallPurlins } from "./functions/calc_wall_purlins";
import { calcVenting } from "./functions/calc_venting";
import { calcGates } from "./functions/calc_gates";
import { calcSheathings } from "./functions/calc_sheathings";
import { calcMaterials } from "./functions/calc_materials";

export function mainCalculations(type) {
  switch (type) {
    case 1:
      return calcStorageWithoutSuport;
    case 2:
      alert("2");
      break;
    case 3:
      alert("3");
      break;
    case 4:
      alert("4");
      break;
  }
}

function calcStorageWithoutSuport(width, length, height, snowArea) {
  return (
    calcFm1(width, length) +
    calcLenta(width, length) +
    calcBaza(width, length) +
    calcKolony(width, length, height) +
    calcStiyky(width, length, height) +
    calcVerh(width, length) +
    calcVertical(length, height) +
    calcFermy(width, length, snowArea) +
    calcHorizontal(width, length) +
    calcRoofPurlins(width, length, snowArea) +
    calcWallPurlins(width, length, height) +
    calcVenting(width, length) +
    calcGates(width) +
    calcSheathings(width, length, height) +
    calcMaterials(width, length)
  );
}
