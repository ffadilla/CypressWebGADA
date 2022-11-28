Feature: Employee

  Background:
    Given user "08408418423" is logged in
    And user prepares test data
    And user visits employee page

  Scenario: User adds and login with new employee with Catat Penjualan access
    When user click tambah karyawan button
    And user types "Web Automation Employee Penjualan" on employee name field
    And user type "81222211122" on phone number field
    And user click job position on tipe pekerjaan dropdown
    And user select kasir on tipe pekerjaan list
    And user click catat penjualan dan kelola diskon
    And user click simpan button employee
    Then Web Automation Employee Penjualan is displayed in the employee list

  Scenario: User adds new employee with Kelola Barang & Catat Pembelian access
    When user click tambah karyawan button
    And user types "Web Automation Employee Pembelian" on employee name field
    And user type "82122211122" on phone number field
    And user click job position on tipe pekerjaan dropdown
    And user select sales on tipe pekerjaan list
    And user click kelola barang dan catat pembelian
    And user click simpan button employee
    Then Web Automation Employee Pembelian is displayed in the employee list

  Scenario: User adds new employee with Kelola Barang & Catat Pembelian access
    When user click tambah karyawan button
    And user types "Web Automation Employee Karyawan" on employee name field
    And user type "82222211122" on phone number field
    And user click job position on tipe pekerjaan dropdown
    And user select admin on tipe pekerjaan list
    And user click kelola karyawan
    And user click simpan button employee
    Then Web Automation Employee Karyawan is displayed in the employee list
    Then user deletes test data

  Scenario: User update employee data and access
    When user click employee name "Update Karyawan" on employee list
    And user click ubah data job position and employee access
    And user click job position on tipe pekerjaan dropdown
    And user select kurir on tipe pekerjaan list
    And user click manage all access
    And user click on update buttons employee
    And user click on closed button drawer
    Then gudang is displayed in the employee list
  
  Scenario: User deletes employee
    When user click employee name "Delete Karyawan" on employee list
    And user click ubah data job position and employee access
    And user click delete button on detail employee modal
    Then delete karyawan is disappears in the employee list