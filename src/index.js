import { calcSquare, calcWork } from "./functions";

import { priceFormat, numberFormat } from "./helpers";

import { mainCalculations } from "./constructor";

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const width = parseInt(form.get("width"));
  const length = parseInt(form.get("length"));
  const height = parseFloat(form.get("height"));
  const snowArea = parseInt(form.get("snow_area"));
  const type = parseInt(form.get("type"));
  console.log(type);

  const calcFunction = mainCalculations(type);

  const workPrice = calcWork(width, length);

  let sum = 0;
  sum += calcFunction(width, length, height, snowArea) + workPrice;

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
