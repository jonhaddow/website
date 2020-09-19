it("Has no detectable a11y violations on load", () => {
	cy.visit("/blog");
	cy.injectAxe();

	cy.findByRole("heading", { name: /Blog/ }).should("exist");
	cy.checkA11y();
});
