describe("The Home Page", () => {
	it("successfully loads", () => {
		cy.visit("/");

		cy.get("h1").should("contain", "Jon Haddow");
		cy.get("h1 + p").should("contain", "Web Developer");
		cy.get("[data-cy='homeSummary']").should("be.visible");
	});

	describe("When the about link is clicked", () => {
		it("Opens the /about page", () => {
			cy.visit("/");

			cy.get("[data-cy='homeSummary'] + a").click();

			cy.url().should("include", "/about");
		});
	});
});
