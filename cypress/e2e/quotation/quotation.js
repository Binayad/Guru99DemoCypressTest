describe("Guru 99 Demo Site Quotation Verification", () => {
    before(() => {
		cy.login();
        cy.preserveCookie();
	});

    after(() => {
        cy.go('back');
        cy.logout();
    });

    it("Request Quotation visit, Verify the calculation, Save the Qutotaion and Store the Quotation Key ", function () {
        cy.RequestQuotationVisit();
        cy.RequestQuotationForm();
        cy.VerifyCalculatedRequestQuotationForm();
        cy.SavedRequestQuotationForm();
        cy.VerifySavedRequestQuotationForm();
    });

    it("Retrieve Quotation from stored key and verify the data with Request Quotation", function () {
        cy.RetrieveQuotationVisit();
        cy.RetrieveQuotationForm();
    });
})
