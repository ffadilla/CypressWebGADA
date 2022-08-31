import BaseCommands from "../common/baseCommands";

export default class BasePage extends BaseCommands {
  selectors = {
    snackBarAlert: ".SnackbarContent-root",
    text: ".MuiTypography-root",
    accountSettingsButton: "button[aria-label='Account settings']",
    logoutButton: ".MuiMenuItem-root:contains('Logout')",
    bmsText: ".MuiTypography-root",
    menuButton: ".MuiListItemButton-root",
  };
}
