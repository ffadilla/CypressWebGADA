import BasePage from "./base-page.js"

const basePage = new BasePage();

export default class CreatePurchaseRequestPage extends BasePage {

    PATH                          = "purchaseRequest/createProposal";
    CHANNEL_INPUT                 = "#field-channel .MuiSelect-select";
    VENDOR_ID_INPUT               = "#field-vendorId .MuiOutlinedInput-root #combo-box-demo";
    VENDOR_NAME_INPUT             = "#field-nama-penjual .MuiInput-input";
    VENDOR_ADDRESS_INPUT          = "#field-alamat-penjual textarea[class*='_textArea__']";
    VENDOR_TAX_TYPE_INPUT         = "#field-tipe-perpajakan .MuiInput-input";
    BUYER_ID_INPUT                = "#field-buyer-id .MuiOutlinedInput-root #combo-box-demo";
    BUYER_NAME_INPUT              = "#field-buyer-name .MuiInput-input";
    BUYER_AREA_INPUT              = "#field-buyer-area .MuiInput-input";
    DELIVERY_METHOD_INPUT         = "#field-metode-pengiriman input[type='radio']"
    DELIVERY_REQUEST_DATE_BUTTON  = "#field-permintaan-pengiriman .MuiButtonBase-root"
    NEXT_MONTH_CALENDAR_BUTTON    = "button[aria-label='Next month']"
    DELIVERY_FEE_INPUT            = "#field-deliveryFee .MuiInput-input"
    DELIVERY_FEE_DISCOUNT_INPUT   = "#field-deliveryFeeDiscount .MuiInput-input"
    UNLOADING_FEE_INPUT           = "#field-unloadingFee .MuiInput-input"
    PURCHASE_DISCOUNT_INPUT       = "#field-purchaseDiscount .MuiInput-input"
    PURCHASE_REASON_INPUT         = "#field-purchaseReason .MuiGrid-grid-md-9"
    NEXT_TO_ADD_ITEM_BUTTON       = ".MuiButton-root:contains('Lanjut')"
    ADD_NEW_ITEM_BUTTON           = ".MuiCollapse-wrapperInner .MuiButton-root:contains(' Tambah Item Pembelian')"
    PRODUCT_INPUT                 = "#field-product .MuiOutlinedInput-root"
    TAX_TYPE_INPUT                = "#field-taxType input[type='radio']"
    QUANTITY_INPUT                = "#field-quantity .MuiInput-input"
    RATE_INPUT                    = "#field-quantity .MuiInput-input"
    DPP_INPUT                     = "#field-dpp .MuiInput-input"
    VAT_INPUT                     = "#field-dpp .MuiInput-input"
    RATE_DISCOUNT_INPUT           = "#field-discountPerQty .MuiInput-input"
    TOTAL_AMOUNT_INPUT            = ":nth-child(2) > .css-8atqhb > .MuiGrid-container > .MuiGrid-grid-md-9 > .MuiInput-root > .MuiInput-input"
    ADD_ITEM_BUTTON               = ".style_ModalFooter__3jP-z .MuiButton-root"
    NEXT_TO_SELLING_PRICE_BUTTON  = ".MuiGrid-root .MuiButton-root:contains('Lanjut')"
    PURCHASE_ITEM_VARIANT_CARD    = ".MuiPaper-root .MuiCardContent-root"
    SELLING_ESTIMATION_DAYS_INPUT = "#field-quantity .MuiInput-input"
    SETTING_TYPE_INPUT            = "#field-settingType input[type='radio']"
    ADD_SELLING_UOM_BUTTON        = ".MuiTypography-root:contains('+ Tambah UOM Penjualan')"
    UOM_CHECKBOX                  = ".MuiFormControlLabel-root .MuiTypography-root"
    SET_SELLING_PRICE_BUTTON      = ".MuiTypography-root:contains('Atur Harga')"
    DELETE_SELLING_PRICE_BUTTON   = ".MuiTypography-root:contains('Hapus Strata')"
    MINIMUM_QUANTITY_INPUT        = "#field-minQuantity .MuiInput-input"
    MARGIN_INPUT                  = "#field-margin .MuiInput-input"
    PRICE_INPUT                   = "#field-price .MuiInput-input"
    ADD_NEW_PRICE_TIER_BUTTON     = ".MuiTypography-root:contains('+ Tambah Harga')"
    SAVE_PRICE_TIER_BUTTON        = ".MuiButton-root:contains('Simpan')"
    SELLING_PRICE_TEXT            = ".style_rowDivider__1M-29 .MuiTypography-root"
    ROUNDED_SELLING_PRICE_TEXT    = "tbody .MuiTypography-root"
    NEXT_TO_PREVIEW_BUTTON        = ".MuiButton-root:contains('Lanjut')"
    SAVE_PURCHASE_REQUEST_BUTTON  = ".MuiButton-root:contains('Simpan')"
    CONFIRM_OK_BUTTON             = ".MuiButton-root:contains('OK')"

    visitCreatePurchaseRequestPage(){
        basePage.navigate(this.PATH);
    }

    expandChannelList(){
        cy
            .get(this.CHANNEL_INPUT)
            .click();
    }

    selectChannel(channel){
        cy
            .get(`li[class*='MuiMenuItem-root'][data-value='${channel}']`)
            .click();
    }

    typeVendorId(vendorId){
        cy
            .get(this.VENDOR_ID_INPUT)
            .type(vendorId);
    }

    typeBuyerId(buyerId){
        cy
            .get(this.BUYER_ID_INPUT)
            .type(buyerId);
    }

    selectOption(index){
        cy
            .get(`li[id="combo-box-demo-option-${index}"]`)
            .click();
    }

    selectDeliveryMethod(deliveryMethod){
        cy
            .get(this.DELIVERY_METHOD_INPUT + `[value='${deliveryMethod}']`)
            .click();
    }

    setDeliveryRequestStartDate(date){
        cy
            .get(this.DELIVERY_REQUEST_DATE_BUTTON).eq(0)
            .click();

        cy
            .get(`button[aria-label='${date}']`).eq(0)
            .click();
    }

    setDeliveryRequestEndDate(date){
        cy
            .get(this.DELIVERY_REQUEST_DATE_BUTTON).eq(1)
            .click();

        cy.get("button").then(($button) => {
            if ($button.find(`[aria-label='${date}']`).length > 1) {
                cy
                    .get(`button[aria-label='${date}']`).eq(1)
                    .click();
            }
            else if ($button.find(`[aria-label='${date}']`).length == 1) {
                cy
                    .get(`button[aria-label='${date}']`)
                    .click();
            }
            else {
                cy.get(this.NEXT_MONTH_CALENDAR_BUTTON).then(element => {
                    if (element.length > 1) {
                        cy
                            .get(this.NEXT_MONTH_CALENDAR_BUTTON).eq(1)
                            .click();
                    }
                    else {
                        cy
                            .get(this.NEXT_MONTH_CALENDAR_BUTTON).eq(0)
                            .click();
                    }
                });
                cy
                    .get(`button[aria-label='${date}']`)
                    .click();
            }
        });
    }

    typeDeliveryFee(deliveryFee){
        cy
            .get(this.DELIVERY_FEE_INPUT)
            .type(deliveryFee);
    }

    typeDeliveryFeeDiscount(deliveryFeeDiscount){
        cy
            .get(this.DELIVERY_FEE_DISCOUNT_INPUT)
            .type(deliveryFeeDiscount);
    }

    typeUnloadingFee(unloadingFee){
        cy
            .get(this.UNLOADING_FEE_INPUT)
            .type(unloadingFee);
    }

    typePurchaseDiscount(purchaseDiscount){
        cy
            .get(this.PURCHASE_DISCOUNT_INPUT)
            .type(purchaseDiscount);
    }

    typePurchaseReason(purchaseReason){
        cy
            .get(this.PURCHASE_REASON_INPUT)
            .type(purchaseReason);
    }

    clickNextToAddItem(){
        cy
            .get(this.NEXT_TO_ADD_ITEM_BUTTON)
            .click();
    }

    clickAddNewItem(){
        cy
            .get(this.ADD_NEW_ITEM_BUTTON)
            .click();
    }

    typeProduct(product){
        cy
            .get(this.PRODUCT_INPUT)
            .type(product);
    }

    selectTaxType(taxType){
        cy
            .get(this.TAX_TYPE_INPUT + `[value='${taxType}']`)
            .click();
    }

    typeQuantity(quantity){
        cy
            .get(this.QUANTITY_INPUT).eq(0)
            .type(quantity);
    }

    typeRate(rate){
        cy
            .get(this.RATE_INPUT).eq(1)
            .type(rate);
    }

    typeRateDiscount(rateDiscount){
        cy
            .get(this.RATE_DISCOUNT_INPUT)
            .type(rateDiscount);
    }

    clickAddItem(){
        cy
            .get(this.ADD_ITEM_BUTTON)
            .click();
    }

    clickNextToSuggestedSellingPrice(){
        cy
            .get(this.NEXT_TO_SELLING_PRICE_BUTTON)
            .click();
    }

    typeSellingEstimationDays(sellingEstimationDays){
        cy
            .get(this.SELLING_ESTIMATION_DAYS_INPUT)
            .type(sellingEstimationDays);
    }

    selectSettingType(settingType){
        cy
            .get(this.SETTING_TYPE_INPUT + `[value='${settingType}']`)
            .click();
    }

    clickAddSellingUom(){
        cy
            .get(this.ADD_SELLING_UOM_BUTTON)
            .click();
    }

    selectSpecificUom(uom){
        cy
            .get(this.UOM_CHECKBOX + `:contains('${uom}')`)
            .click();
    }

    clickSetSellingPrice(){
        cy
            .get(this.SET_SELLING_PRICE_BUTTON)
            .click({force:true});
    }

    typeMinimumQuantity(minimumQuantity){
        cy
            .get(this.MINIMUM_QUANTITY_INPUT)
            .type(minimumQuantity);
    }

    typePrice(price){
        cy
            .get(this.PRICE_INPUT)
            .type(price);
    }

    typeMargin(margin){
        cy
            .get(this.MARGIN_INPUT)
            .type(margin);
    }

    clickSavePriceTier(){
        cy
            .get(this.SAVE_PRICE_TIER_BUTTON)
            .click();
    }

    checkSellingPriceCalculation(beforeRounded, afterRounded){
        cy
            .get(this.SELLING_PRICE_TEXT + `:contains('${beforeRounded}')`)
            .should("be.visible");
        cy
            .get(this.ROUNDED_SELLING_PRICE_TEXT + `:contains('${afterRounded}')`)
            .should("be.visible");
    }

    clickNextToPreview(){
        cy
            .get(this.NEXT_TO_PREVIEW_BUTTON)
            .click({force:true});
    }

    clickSavePurchaseRequest(){
        cy
            .get(this.SAVE_PURCHASE_REQUEST_BUTTON)
            .click();
    }

    clickConfirmOk(){
        cy
            .get(this.CONFIRM_OK_BUTTON)
            .click();
    }

}