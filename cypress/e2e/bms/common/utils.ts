export function dppCalculation(rate: number) {
  return Math.round(rate / 1.11);
}

export function vatCalculation(rate: number, dpp: number) {
  return Math.round(rate - dpp);
}

export function totalAmount(
  quantity: number,
  rate: number,
  rateDiscount: number
) {
  return quantity * (rate - rateDiscount);
}

export function rateDiscount(
  internalDiscount: number,
  principalDiscount: number,
  distributorDiscount: number,
  programDiscount: number
) {
  return (
    internalDiscount + principalDiscount + distributorDiscount + programDiscount
  );
}

export function minimumSellingPrice(
  rate: number,
  rateDiscount: number,
  quantity: number,
  deliveryFee: number,
  deliveryFeeDiscount: number,
  unloadingFee: number,
  purchaseDiscount: number
) {
  return Math.round(
    ((rate - rateDiscount) * quantity +
      (deliveryFee - deliveryFeeDiscount) +
      unloadingFee -
      purchaseDiscount) /
      quantity
  );
}

export function roundPrice(price: number) {
  return Math.ceil(price / 50) * 50;
}

export function marginCalculation(price: number, minimumSellingPrice: number) {
  return parseFloat(
    (((price - minimumSellingPrice) / minimumSellingPrice) * 100).toFixed(2)
  );
}

export function priceCalculation(margin: number, minimumSellingPrice: number) {
  return Math.round((margin / 100) * minimumSellingPrice + minimumSellingPrice);
}

export function randomNumber(length: number) {
  return parseInt(
    ("" + Math.random()).substring(2, 2 + length).replace(/0/g, "1")
  );
}

export function randomDecimal(length: number) {
  return parseFloat(
    ("" + Math.random()).substring(1, length).replace(/0/g, "1")
  );
}

export function numberFormat(number: number) {
  return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
    number
  );
}

export function discountCalculation(
  rate: number,
  discountType: string,
  discount: number
) {
  if (discountType === "amount") {
    return parseFloat(((discount / rate) * 100).toFixed(2));
  } else {
    return Math.round((discount / 100) * rate);
  }
}

export function getEnumKeyByValue(enums: any, value: string) {
  const indexOfValue = Object.values(enums).indexOf(value);
  const key = Object.keys(enums)[indexOfValue];
  return key;
}
