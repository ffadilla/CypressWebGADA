import "./";

Cypress.on("uncaught:exception", (err) => {
  if (err.message.includes("")) {
    return false;
  } else return true;
});
