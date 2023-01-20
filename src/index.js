import { mainCalculations } from "./constructor";

import { calcWorkPrice } from "./functions/calc_work_price";

import { priceFormat, numberFormat } from "./helpers";

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const width = parseInt(form.get("width"));
  const length = parseInt(form.get("length"));
  const height = parseFloat(form.get("height"));
  const snowArea = parseInt(form.get("snow_area"));
  const type = parseInt(form.get("type"));

  const calcFunction = mainCalculations(type);

  const workPrice = calcWorkPrice(width, length, type);

  function calcSquare(width, length) {
    const square = width * length;

    return square;
  }

  //`

  let sum = 0;
  sum += calcFunction(width, length, height, snowArea, type) + workPrice;

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
