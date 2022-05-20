import BasePage from './BasePage.js'

export default class CreateCollectionPage extends BasePage {

    businessUnitIdInput     = "input[id='businessUnitId']";
    requestIdInput          = "input[id='requestId']";
    referenceIdInput        = "input[id='referenceId']";
    recipientNameInput      = "input[id='recipientName']";
    descriptionInput        = "textarea[id='description']";
    itemNameInput           = "input[id='items_0_name']";
    itemAmountInput         = "input[id='items_0_amount']";
    dueDateInput            = "input[id='dueDate']";
    alertMessage            = ".alert";
    submitButton            = "button[type='submit']";

    selectBusinessUnitId(businessUnitId){
        cy.get(this.businessUnitIdInput).select(businessUnitId);
    }

    typeRequestId(requestId){
        cy.get(this.requestIdInput).type(requestId);
    }


    fillCreateCollectionForm(credType) {
        cy
            .get(this.businessUnitIdInput).type(businessUnitId)
            .get(this.requestIdInput).type(requestId)
            .get(this.referenceIdInput).type(referenceId)
            .get(this.recipientNameInput).type(recipientName)
            .get(this.descriptionInput).type(description)
            .get(this.itemNameInput).type(itemName)
            .get(this.itemAmountInput).type(itemAmount)
            .get(this.dueDateInput).type(dueDate);
    }

    submit() {
        this.submit(this.submitButton);
    }

}