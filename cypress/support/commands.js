// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// **********************************************
import { config } from "../../config/index";
import Login_PO from "../support/pageObjects/Login_PO";
import {profile, qutotaion} from "../support/pageObjects/faker";


    
//Login
const login_PO = new Login_PO();
let bodyText = ``
let priceText = ``

Cypress.Commands.add("login", () => {
    login_PO
        .visitSite()
        .fillCredentials()
        .clickOnLoginButton()
        .validationAfterLogin()
});

Cypress.Commands.add("logout", () => {
    cy.get('.button_to > .btn').should('be.visible').should('have.value', "Log out").click();
    cy.url().should("contain", config.app.base_url);
    cy.title().should('eq', 'Insurance Broker System - Login');
    cy.get(':nth-child(3) > .btn').should('be.visible').should('have.value', "Log in");
});

Cypress.Commands.add("preserveCookie", () => {
    Cypress.Cookies.preserveOnce('connect.sid');
});

Cypress.Commands.add("profileVisit", () => {
    cy.get('#ui-id-4').should('be.visible').should('have.text', "Profile").click();    
    cy.get('#profile').should('be.visible').should('have.text', "Profile").should('have.class', 'ui-state-active');
});

Cypress.Commands.add("profileContentCheck", () => {
    cy.get('#tabs-4 > :nth-child(1)').should('be.visible').should('have.text', "\n  Title:\n  ");
    cy.get('#tabs-4 > :nth-child(4)').should('be.visible').should('have.text', "\n  Firstname:\n  ");
    cy.get('#tabs-4 > :nth-child(7)').should('be.visible').should('have.text', "\n  Surname:\n  ");
    cy.get('#tabs-4 > :nth-child(10)').should('be.visible').should('have.text', "\n  Phone:\n  ");
    cy.get('#tabs-4 > :nth-child(13)').should('be.visible').should('have.text', "\n  Dataofbirth:\n  ");
    cy.get('#tabs-4 > :nth-child(16)').should('be.visible').should('have.text', "\n  License type:\n  ");
    cy.get('#tabs-4 > :nth-child(19)').should('be.visible').should('have.text', "\n  License period:\n  ");
    cy.get('#tabs-4 > :nth-child(22)').should('be.visible').should('have.text', "\n  Occupation:\n  ");
    cy.get('#tabs-4 > :nth-child(25)').should('be.visible').should('have.text', "\n  Driver History:\n  ");
    cy.get('#tabs-4 > :nth-child(28)').should('be.visible').should('have.text', "ADDRESS:");
});

Cypress.Commands.add("profileDynamicContentCheck", () => {
    cy.get('#tabs-4 > :nth-child(1)').should('be.visible').should('have.text', "\n  Title:\n  ");
    cy.get('#tabs-4 > :nth-child(4)').should('be.visible').should('have.text', `Firstname:\n ${profile.name}`);
    cy.get('#tabs-4 > :nth-child(7)').should('be.visible').should('have.text', `\n  Surname:\n ${profile.lastName}`);
    cy.get('#tabs-4 > :nth-child(10)').should('be.visible').should('have.text', `\n  Phone:\n  ${profile.phone}`);
    cy.get('#tabs-4 > :nth-child(13)').should('be.visible').should('have.text', "\n  Dataofbirth:\n  ");
    cy.get('#tabs-4 > :nth-child(16)').should('be.visible').should('have.text', "\n  License type:\n  ");
    cy.get('#tabs-4 > :nth-child(19)').should('be.visible').should('have.text', "\n  License period:\n  ");
    cy.get('#tabs-4 > :nth-child(22)').should('be.visible').should('have.text', "\n  Occupation:\n  ");
    cy.get('#tabs-4 > :nth-child(25)').should('be.visible').should('have.text', "\n  Driver History:\n  ");
    cy.get('#tabs-4 > :nth-child(28)').should('be.visible').should('have.text', "ADDRESS:");
});

Cypress.Commands.add("profileEditVisit", () => {
    cy.get('#ui-id-5').should('be.visible').should('have.text', "Edit Profile").click();
    cy.get('h1').should('be.visible').should('have.text', "Editing user profile");
    cy.get('#editprofile').should('be.visible').should('have.text', "Edit Profile").should('have.class', 'ui-state-active');
   
});

Cypress.Commands.add("profileEdit", () => {
    cy.get('#user_title').select('Mr').should('have.value', "Mr");
    cy.get('#user_surname').should('be.visible').clear().type(profile.lastName);
    cy.get('#user_firstname').should('be.visible').clear().type(profile.name);
    cy.get('#user_phone').should('be.visible').clear().type(profile.phone);
    cy.get('#user_dateofbirth_1i').select('1995').should('have.value', "1995");
    cy.get('#user_dateofbirth_2i').select('August').should('have.value', "8");
    cy.get('#user_dateofbirth_3i').select('28').should('have.value', "28");
    cy.get('[type="radio"]').check('t');
    cy.get('#user_licenceperiod').select('8').should('have.value', "8");
    cy.get('#user_occupation_id').select('Engineer').should('have.value', "12");
    cy.get('#user_address_attributes_street').should('be.visible').clear().type(profile.street);
    cy.get('#user_address_attributes_city').should('be.visible').clear().type(profile.city);
    cy.get('#user_address_attributes_county').should('be.visible').clear().type(profile.country);
    cy.get('#user_address_attributes_postcode').should('be.visible').clear().type(profile.postCode);
    cy.get('#edit_user_ > .actions > .btn').should('be.visible').should('have.value', "Update User").click();
    cy.get('#ui-id-4').should('be.visible').should('have.text', "Profile").should('have.class', 'ui-state-active');
});

Cypress.Commands.add("RequestQuotationVisit", () => {
    cy.get('#ui-id-2').should('be.visible').should('have.text', "Request Quotation").click();
    cy.get('#tabs-2 > h2').should('be.visible').should('have.text', "Request a quotation");
    cy.get('#newquote').should('be.visible').should('have.text', "Request Quotation").should('have.class', 'ui-state-active');
});

Cypress.Commands.add("RequestQuotationForm", () => {
    cy.get('#quotation_breakdowncover').select('At home').should('have.value', "3");
    cy.get('#quotation_windscreenrepair_t').click();
    cy.get('#quotation_incidents').invoke('attr', 'placeholder').should('contain', 'Enter incidents');
    cy.get('#quotation_incidents').should('be.visible').clear().type(qutotaion.incidents);
    cy.get('#quotation_vehicle_attributes_registration').invoke('attr', 'placeholder').should('contain', 'Enter vehicle registration');
    cy.get('#quotation_vehicle_attributes_registration').should('be.visible').clear().type(qutotaion.registration);
    cy.get('#quotation_vehicle_attributes_mileage').invoke('attr', 'placeholder').should('contain', 'Enter vehicle mileage');
    cy.get('#quotation_vehicle_attributes_mileage').should('be.visible').clear().type(qutotaion.annualMileage);
    cy.get('#quotation_vehicle_attributes_value').invoke('attr', 'placeholder').should('contain', 'Enter vehicle value');
    cy.get('#quotation_vehicle_attributes_value').should('be.visible').clear().type(qutotaion.estimatedValue);
    cy.get('#quotation_vehicle_attributes_parkinglocation').select('Private property').should('have.value', "Private property");
    cy.get('#quotation_vehicle_attributes_policystart_1i').select('2020').should('have.value', "2020");
    cy.get('#quotation_vehicle_attributes_policystart_2i').select('October').should('have.value', "10");
    cy.get('#quotation_vehicle_attributes_policystart_3i').select('1').should('have.value', "1");
    cy.get('.btn-default').should('be.visible').should('have.value', "Calculate Premium").click();
});

Cypress.Commands.add("VerifyCalculatedRequestQuotationForm", () => {
   
    let bodytext = ''
    cy.get('#calculatedpremium')
        .then($el => {
            bodytext = $el[0].innerText
            priceText = bodytext
                .replace(`No discount`, ``)
                .replace(`Premium:`, ``)
                .trim()
            cy.get('#calculatedpremium').should('be.visible').should('have.text', `No discountPremium: ${priceText}`);
        })

});

Cypress.Commands.add("SavedRequestQuotationForm", () => {
    cy.get('#new_quotation > .actions > .btn-success').should('be.visible').should('have.value', "Save Quotation").click();

});

Cypress.Commands.add("VerifySavedRequestQuotationForm", () => {
    let bodytext = ''
    cy.get('body')
        .then($el => {
            bodytext = $el[0].innerText
            bodyText = bodytext
                .replace(`You have saved this quotation!`, ``)
                .replace(`Your identification number is`, ``)
                .replace(`:`, ``)
                .replace(`Please write it down for later retrieve`, ``)
                .trim()
            cy.log(bodyText)
        })

});

Cypress.Commands.add("RetrieveQuotationVisit", () => {
    cy.go('back');
    cy.get('#ui-id-3').should('be.visible').should('have.text', "Retrieve Quotation").click();
    cy.get('form > [type="text"]').invoke('attr', 'placeholder').should('contain', 'identification number');
    cy.get('#retrieve').should('be.visible').should('have.text', "Retrieve Quotation").should('have.class', 'ui-state-active');
});

Cypress.Commands.add("RetrieveQuotationForm", () => {
    cy.get('form > [type="text"]').should('be.visible').clear().type(bodyText);
    cy.get('#getquote').click()
    cy.get(':nth-child(5) > :nth-child(2)').should('be.visible').should('have.text', qutotaion.incidents);
    cy.get(':nth-child(6) > :nth-child(2)').should('be.visible').should('have.text', qutotaion.registration);
    cy.get(':nth-child(7) > :nth-child(2)').should('be.visible').should('have.text', qutotaion.annualMileage);
    cy.get(':nth-child(8) > :nth-child(2)').should('be.visible').should('have.text', qutotaion.estimatedValue);
});

