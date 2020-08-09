it("homepage successfully loads", () => {
	cy.visit("/");

	cy.findByText("Jon Haddow").should("exist");
	cy.findByText("Web Developer").should("exist");
});

describe("navigation", () => {
	it('clicking "About" opens /about', () => {
		cy.visit("/");

		cy.findAllByText("About").click();

		cy.url().should("include", "/about");
	});

	it('clicking "Blog" opens /blog', () => {
		cy.visit("/");

		cy.findAllByText("Blog").click();

		cy.url().should("include", "/blog");
	});

	it('clicking the "Read more" opens /about', () => {
		cy.visit("/");

		cy.findAllByText("Read more").click();

		cy.url().should("include", "/about");

		cy.findByRole("header", {});
	});

	it('clicking the "View all posts" opens /blog', () => {
		cy.visit("/");

		cy.findAllByText("View all posts").click();

		cy.url().should("include", "/blog");
	});
});
