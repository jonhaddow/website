it("blog page loads successfully", () => {
	cy.visit("/blog");

	cy.findByRole("heading", { name: /Blog/ }).should("exist");
});

it("posts are rendering", () => {
	cy.visit("/blog");

	cy.findByRole("main").within(() => {
		cy.findAllByRole("link").should("have.length.be.greaterThan", 1);
	});
});
