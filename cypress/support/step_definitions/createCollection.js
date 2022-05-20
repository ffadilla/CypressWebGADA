import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CreateCollectionPage from '../../integration/payment/page_objects/CreateCollectionPage';

const createCollectionPage = new CreateCollectionPage();

Given('I navigate to Create Collection page', () => {
    createCollectionPage.navigate('/collection/create');
});

When('I select {string} business unit id', (businessUnitId) => {
    createCollectionPage.selectBusinessUnitId(businessUnitId);
});