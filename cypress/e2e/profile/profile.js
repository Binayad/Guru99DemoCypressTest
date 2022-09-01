describe("Guru 99 Demo Site Profile Verification", () => {
    before(() => {
		cy.login();
        cy.preserveCookie();
	});

    after(() => {
        cy.logout();
    });

    it("Profile edit and update with the random value", function () {
        cy.profileEditVisit();
        cy.profileEdit();
    });

    it("Profile Tab Visit and checking the Profile page content", function () {
        cy.profileVisit();
        cy.profileContentCheck();
    });

    it("Profile Tab Visit and checking the Profile Value", function () {
        cy.profileVisit();
        cy.profileDynamicContentCheck();
    });

    

})
