export const priceFormat = (price) => {
  return new Intl.NumberFormat("ua", {
    style: "currency",
    minimumFractionDigits: 0,
    currency: "UAH",
  }).format(price);
};

export const numberFormat = (number) => {
  return new Intl.NumberFormat("ua", {
    minimumFractionDigits: 0,
  }).format(number);
};
