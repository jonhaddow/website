it("Has no detectable a11y violations on load", () => {
	cy.visit("/about");
	cy.injectAxe();

	cy.findByRole("heading", { name: "About Me" }).should("exist");
	cy.checkA11y();
});
