it("home page successfully loads", () => {
	cy.visit("/");

	cy.findByText("Jon Haddow").should("exist");
	cy.findByText("Web Developer").should("exist");
});

describe("navigation", () => {
	it('clicking the "Read more" opens /about', () => {
		cy.visit("/");

		cy.findAllByText("Read more").click();

		cy.url().should("include", "/about");
	});

	it('clicking the "View all posts" opens /blog', () => {
		cy.visit("/");

		cy.findAllByText("View all posts").click();

		cy.url().should("include", "/blog");
	});
});
