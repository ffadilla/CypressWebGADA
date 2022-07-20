export function deliveryMethod(deliveryMethodName){
    if(deliveryMethodName == "Gudang Ada Logistic"){
        return "GADA_LOGISTIC";
    }
    else {
        return "STORE_COURIER";
    }
};

export function taxType(taxTypeName){
    if(taxTypeName == "Non PPN"){
        return "NON_VAT";
    }
    else {
        return "VAT";
    }
};

export function dppCalculation(rate){
    return Math.round(rate / 1.11);
};

export function vatCalculation(rate, dpp){
    return Math.round(rate - dpp);
};

export function totalAmount(quantity, rate, rateDiscount){
    return quantity * (rate - rateDiscount);
}

export function minimumSellingPrice(rate, rateDiscount, quantity, deliveryFee, deliveryFeeDiscount, unloadingFee, purchaseDiscount){
    return Math.round((((rate - rateDiscount) * quantity) + (deliveryFee - deliveryFeeDiscount ) + unloadingFee - purchaseDiscount ) / quantity);
}

export function roundPrice(price){
    return Math.ceil(price / 50) * 50;
}

export function marginCalculation(price, minimumSellingPrice){
    return parseFloat((((price - minimumSellingPrice) / minimumSellingPrice) * 100).toFixed(2));
}

export function priceCalculation(margin, minimumSellingPrice){
    return Math.round((margin / 100 * minimumSellingPrice) + minimumSellingPrice);
}