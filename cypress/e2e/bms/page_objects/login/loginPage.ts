import BaseCommands from "../baseCommands";

const base = new BaseCommands();

export default class LoginPage extends BaseCommands {
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
