import BaseCommads from "../common/baseCommads";

const base = new BaseCommads();

export default class LoginPage extends BaseCommads {
  path = "";
  selectors = {
    loginWithEmailButton: ".MuiButton-root:contains('Masuk dengan Email')",
    userEmailInput: ".MuiSelect-select",
    userEmailOption: "li[role='option']",
    loginButton: ".MuiButton-root:contains('Login')",
  };

  selectUserEmail(userEmail: string) {
    base.click(this.selectors.userEmailInput);
    base.selectOption(this.selectors.userEmailOption, userEmail);
  }
}
