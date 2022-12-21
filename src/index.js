import {
  calcSquare,
  calcWork,
  calcFm1,
  calcLenta,
  calcBaza,
  calcKolony,
  calcStiyky,
  calcVerh,
  calcVertical,
  calcFermy,
  calcHorizontal,
  calcRoofPurlins,
  calcWallPurlins,
  calcVenting,
  calcGates,
  calcSheathings,
  materials,
} from "./functions";

import { priceFormat, numberFormat } from "./helpers";

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const width = parseInt(form.get("width"));
  const length = parseInt(form.get("length"));
  const height = parseFloat(form.get("height"));
  const snowArea = parseInt(form.get("snow_area"));

  const workPrice = calcWork(width, length);

  let sum = 0;
  sum +=
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
    materials(width, length) +
    workPrice;

  const square = document.getElementById("square");
  square.value = numberFormat(calcSquare(width, length)) + " м2";

  const out = document.getElementById("out");
  out.value = priceFormat(sum);

  const work = document.getElementById("work");
  work.value = priceFormat(workPrice);

  const squareMeter = document.getElementById("square_meter");
  squareMeter.value =
    numberFormat(Math.ceil(sum / calcSquare(width, length))) + " грн/м2";
});
