import BaseCommads from "../../common/baseCommads";

export default class WaitingForApprovalDetailPage extends BaseCommads {
  seletors = {
    changeDeliveryRequestDateButton: ".MuiTypography-roo:contains('Ubah')",
    selectedSettingTypeRadioButton: ".MuiRadio-root Mui-checked",
    settingTypeInput: ".PrivateSwitchBase-input input[type='radio']",
  };
}
