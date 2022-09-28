import BasePage from "../basePage";

export default class WaitingForApprovalDetailPage extends BasePage {
  changeDeliveryRequestDateButton = ".MuiTypography-roo:contains('Ubah')";
  selectedSettingTypeRadioButton = ".MuiRadio-root Mui-checked";
  settingTypeInput = ".PrivateSwitchBase-input input[type='radio']";
}
