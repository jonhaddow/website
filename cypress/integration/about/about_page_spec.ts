it("about page successfully loads", () => {
	cy.visit("/about");

	cy.findByText("About Me").should("exist");
	cy.findByText("Hi! I'm Jon 👋").should("exist");
});
