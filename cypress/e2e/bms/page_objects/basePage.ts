export default class BasePage {
  selectors = {
    snackBarAlert: ".SnackbarContent-root",
    text: ".MuiTypography-root",
    accountSettingsButton: "button[aria-label='Account settings']",
    logoutButton: ".MuiMenuItem-root:contains('Logout')",
    bmsText: ".MuiTypography-root",
  };
}
