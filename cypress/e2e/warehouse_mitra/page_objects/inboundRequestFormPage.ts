import BasePage from "./basePage";

export default class InboundRequestFormPage extends BasePage {
  path = "/inventory/inbound/request/create";
  xPathSubmitRequestFormButton =
    '//*[@id="__next"]/div/div[3]/div[2]/form/div[2]/div/div/button[2]';
  errorSourceID =
    ":nth-child(1) > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorSourceType =
    ":nth-child(1) > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorStoreName =
    ":nth-child(1) > :nth-child(3) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorWarehouseName =
    ":nth-child(1) > :nth-child(4) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorStoreTargetName =
    ":nth-child(1) > :nth-child(5) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorStoreTargetAddress =
    ":nth-child(1) > :nth-child(6) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorSourceDate =
    ":nth-child(1) > :nth-child(7) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorSourceDeliveryDate =
    ":nth-child(1) > :nth-child(8) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorSourceDeliveryMethod =
    ":nth-child(1) > :nth-child(9) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorRequestProductName =
    ":nth-child(4) > .MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiFormHelperText-root";
  errorRequestProductQuantity =
    ":nth-child(4) > .MuiGrid-container > :nth-child(2) > .MuiFormControl-root > .MuiFormHelperText-root";
}
