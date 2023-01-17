import { calcFm1Storage, calcFm1Canopy } from "./functions/calc_fm_without";
import { calcLenta } from "./functions/calc_lenta";
import { calcBazaWithout } from "./functions/calc_baza";
import { calcKolonyWithout } from "./functions/calc_kolony";
import { calcStiyky } from "./functions/calc_stiyky";
import { calcVerhWithout } from "./functions/calc_verh";
import { calcVerticalSWOS, calcVerticalCWOS } from "./functions/calc_vertical";
import { calcFermySWOS, calcFermyCWOS } from "./functions/calc_fermy";
import { calcHorizontalWithout } from "./functions/calc_horizontal";
import {
  calcRoofPurlinsSWOS,
  calcRoofPurlinsCWOS,
} from "./functions/calc_roof_purlins";
import { calcWallPurlins } from "./functions/calc_wall_purlins";
import { calcVenting } from "./functions/calc_venting";
import { calcGates } from "./functions/calc_gates";
import {
  calcSheathingsSWOS,
  calcSheathingsCWOS,
} from "./functions/calc_sheathings_without";
import { calcMaterials } from "./functions/calc_materials";

export function mainCalculations(type) {
  switch (type) {
    case 1:
      return calcStorageWithoutSuport;
    case 2:
      alert("В розробці");
      break;
    case 3:
      return calcCanopyWithoutSuport;
    case 4:
      alert("В розробці");
      break;
  }
}

function calcStorageWithoutSuport(width, length, height, snowArea, type) {
  return (
    calcFm1Storage(width, length) +
    calcLenta(width, length) +
    calcBazaWithout(width, length) +
    calcKolonyWithout(width, length, height) +
    calcStiyky(width, length, height) +
    calcVerhWithout(width, length) +
    calcVerticalSWOS(length, height) +
    calcFermySWOS(width, length, snowArea) +
    calcHorizontalWithout(width, length) +
    calcRoofPurlinsSWOS(width, length, snowArea) +
    calcWallPurlins(width, length, height) +
    calcVenting(width, length) +
    calcGates(width) +
    calcSheathingsSWOS(width, length, height) +
    calcMaterials(width, length, type)
  );
}

function calcCanopyWithoutSuport(width, length, height, snowArea, type) {
  return (
    calcFm1Canopy(width, length) +
    calcBazaWithout(width, length) +
    calcKolonyWithout(width, length, height) +
    calcVerhWithout(width, length) +
    calcVerticalCWOS(length, height) +
    calcFermyCWOS(width, length, snowArea) +
    calcHorizontalWithout(width, length) +
    calcRoofPurlinsCWOS(width, length, snowArea) +
    calcSheathingsCWOS(width, length, height) +
    calcMaterials(width, length, type)
  );
}
