export function deliveryMethod(deliveryMethodName: string) {
  if (deliveryMethodName == "Gudang Ada Logistic") {
    return "GADA_LOGISTIC";
  } else {
    return "STORE_COURIER";
  }
}

export function taxType(taxTypeName: string) {
  if (taxTypeName == "Non PPN") {
    return "NON_VAT";
  } else {
    return "VAT";
  }
}

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

export function numberFormat(number: number) {
  return new Intl.NumberFormat("id-ID", { minimumFractionDigits: 0 }).format(
    number
  );
}
