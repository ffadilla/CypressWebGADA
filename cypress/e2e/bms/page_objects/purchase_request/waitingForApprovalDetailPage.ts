import BaseCommands from "../baseCommands";

export default class WaitingForApprovalDetailPage extends BaseCommands {
  selectors = {
    changeDeliveryRequestDateButton: ".MuiTypography-roo:contains('Ubah')",
    selectedSettingTypeRadioButton: ".MuiRadio-root Mui-checked",
    settingTypeInput: ".PrivateSwitchBase-input input[type='radio']",
  };
}
