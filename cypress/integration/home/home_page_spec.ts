it("home page successfully loads", () => {
	cy.visit("/");

	cy.findByRole("heading", { name: /Jon Haddow/ }).should("exist");
	cy.findByText("Web Developer").should("exist");
});

describe("navigation", () => {
	it('clicking the "Read more" opens /about', () => {
		cy.visit("/");

		cy.findByRole("link", { name: /Read more/ }).click();

		cy.url().should("include", "/about");
		cy.findByRole("heading", { name: /About/ }).should("exist");
	});

	it('clicking the "View all posts" opens /blog', () => {
		cy.visit("/");

		cy.findByRole("link", { name: /View all posts/ }).click();

		cy.url().should("include", "/blog");
		cy.findByRole("heading", { name: /Blog/ }).should("exist");
	});
});
