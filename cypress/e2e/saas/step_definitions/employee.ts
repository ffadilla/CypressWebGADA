import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import EmployeePage from "../page_objects/employeePage";
import * as utils from "./utils";

const employeePage = new EmployeePage();

//Add Employee
Given("user visits employee page", () => {
  employeePage.navigate(employeePage.path);
});

When("user click tambah karyawan button", () => {
  employeePage.clickEmployeeAddModalButton();
});

When("user types {string} on employee name field", (name: string) => {
  employeePage.typeEmployeeInputName(name);
  cy.get(employeePage.employeeInputName).should("have.value", name);
});

When("user type {string} on phone number field", (num: string) => {
  employeePage.typeEmployeeInputPhoneNumber(num);
  cy.get(employeePage.employeeInputPhoneNumber).should("have.value", num);
});

When("user click job position on tipe pekerjaan dropdown", () => {
  employeePage.clickEmployeeInputJob();
});

When("user select kasir on tipe pekerjaan list", () => {
  employeePage.clickEmployeeInputJobOptionKasir();
  cy.wait(1000);
});

When("user select sales on tipe pekerjaan list", () => {
  employeePage.clickEmployeeInputJobOptionSales();
  cy.wait(1000);
});

When("user select admin on tipe pekerjaan list", () => {
  employeePage.clickEmployeeInputJobOptionAdmin();
  cy.wait(1000);
});

When("user click catat penjualan dan kelola diskon", () => {
  employeePage.clickEmployeeChildSalesCheckbox();
  employeePage.clickEmployeeChildDiskonCheckbox();
  employeePage.clickEmployeeChildRefundProcessCheckbox();
  employeePage.clickEmployeeChildViewProduct();
  employeePage.clickEmployeeChildUpdateProduct();
});

When("user click kelola barang dan catat pembelian", () => {
  employeePage.clickEmployeeChildPurchasingCheckbox();
  employeePage.clickEmployeeChildUpdateProduct();
  employeePage.clickEmployeeChildDeleteProduct();
});

When("user click kelola karyawan", () => {
  employeePage.clickEmployeeAddChildCheckbox();
  employeePage.clickEmployeeDeleteChildCheckbox();
  employeePage.clickEmployeeViewChildCheckbox();
  employeePage.clickEmployeeEditChildCheckbox();
});

When("user click simpan button employee", () => {
  employeePage.clickEmployeeSimpanButton();
  cy.wait(1000);
});

When("user click delete button on detail employee modal", () => {
  employeePage.clickEmployeeDeleteButton();
  cy.wait(500);
});

//Update Employee
When(
  "user click employee name {string} on employee list",
  (salesId: string) => {
    utils.retrieveSalesEmployeeId(salesId);
    cy.get("@salesId").then((salesId: any) => {
      employeePage.clickEmployeeListDrawer(salesId);
    });
  }
);

When("user click ubah data job position and employee access", () => {
  employeePage.clickEmployeeDetailEditButton();
  cy.wait(500);
});

When("user select kurir on tipe pekerjaan list", () => {
  employeePage.clickEmployeeInputJobOptionCourier();
  cy.wait(500);
});

When("user click manage all access", () => {
  employeePage.clickEmployeeChildSalesCheckbox();
  employeePage.clickEmployeeChildDiskonCheckbox();
  employeePage.clickEmployeeChildRefundProcessCheckbox();
  employeePage.clickEmployeeChildViewProduct();
  employeePage.clickEmployeeChildUpdateProduct();
  employeePage.clickEmployeeChildDeleteProduct();
  employeePage.clickEmployeeAddChildCheckbox();
  employeePage.clickEmployeeDeleteChildCheckbox();
  employeePage.clickEmployeeViewChildCheckbox();
  employeePage.clickEmployeeEditChildCheckbox();
  employeePage.clickEmployeeChildPurchasingCheckbox();
  employeePage.clickEmployeeChildUpdateProduct();
  employeePage.clickEmployeeChildDeleteProduct();
});

When("user click on update buttons employee", () => {
  employeePage.clickEmployeeUpdateButton();
  cy.wait(1000);
});

When("user click on closed button drawer", () => {
  employeePage.clickEmployeeCloseDrawer();
  cy.wait(500);
});

When("user click inventory item on inventory list", () => {
  cy.get("#button_inventory_list_td_nama_barang_22623").click({ force: true });
  cy.wait(500);
});

//Assertion
Then(
  "Web Automation Employee Penjualan is displayed in the employee list",
  () => {
    cy.get(".MuiTableBody-root > :nth-child(5) > :nth-child(1)").should(
      "have.text",
      "Web Automation Employee Penjualan"
    );
  }
);

Then(
  "Web Automation Employee Pembelian is displayed in the employee list",
  () => {
    cy.get(".MuiTableBody-root > :nth-child(5) > :nth-child(1)").should(
      "have.text",
      "Web Automation Employee Pembelian"
    );
  }
);

Then(
  "Web Automation Employee Karyawan is displayed in the employee list",
  () => {
    cy.get(".MuiTableBody-root > :nth-child(5) > :nth-child(1)").should(
      "have.text",
      "Web Automation Employee Karyawan"
    );
  }
);

Then("gudang is displayed in the employee list", () => {
  cy.get(".MuiTableBody-root > :nth-child(3) > :nth-child(3)").should(
    "have.text",
    "Kurir"
  );
});

Then("delete karyawan is disappears in the employee list", () => {
  cy.get(".MuiTableBody-root >").should("not.have.text", "Delete Karyawan");
});

Then("inventory list menu is locked", () => {
  cy.get(
    "body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogTitle-root > div"
  ).should("have.text", "Menu TerkunciReset");
});

Then("user clicks on x button", () => {
  cy.get(
    "body > div.MuiDialog-root > div.MuiDialog-container.MuiDialog-scrollPaper > div > div.MuiDialogTitle-root > div"
  )
    .find("button")
    .invoke("show")
    .click({ multiple: true });
  cy.wait(1000);
  cy.reload();
});
