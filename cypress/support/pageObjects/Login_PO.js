import { config } from "../../../config/index";

class Login_PO {

    visitSite(){
        cy.visit(config.app.base_url);
        cy.url().should("contain", config.app.base_url);
        cy.title().should('eq', 'Insurance Broker System - Login');

        return this;
    }
    
    fillCredentials() {
        cy.get('#email').should('be.visible').clear().type(config.app.email);
        cy.get('#password').should('be.visible').clear().type(config.app.password);
        

        return this;
    }

    clickOnLoginButton() {
        cy.get(':nth-child(3) > .btn').should('be.visible').should('have.value', "Log in").click();

        return this;
    }

    validationAfterLogin(){
        cy.url().should("contain", "/header.php");
        cy.title().should('eq', 'Insurance Broker System');
        cy.get('h4').should('be.visible').should("have.text", config.app.email);
        cy.get('#home').should('be.visible').should('have.text', "Home").should('have.class', 'ui-state-active');
        cy.get('.button_to > .btn').should('be.visible').should('have.value', "Log out");
    }
}

export default Login_PO;