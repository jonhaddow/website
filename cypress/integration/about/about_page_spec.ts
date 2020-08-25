it("should render the about page", () => {
	cy.visit("/about");

	cy.findByRole("heading", { name: "About Me" }).should("exist");
	cy.findByText("Hi! I'm Jon 👋").should("exist");
});
