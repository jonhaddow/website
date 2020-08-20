describe("homepage", () => {
	it("-> about", () => {
		cy.visit("/");

		cy.findByText("About").click();

		cy.url().should("include", "/about");
	});

	it("-> blog", () => {
		cy.visit("/");

		cy.findByText("Blog").click();

		cy.url().should("include", "/blog");
	});
});

describe("about", () => {
	it("-> homepage", () => {
		cy.visit("/about");

		cy.findByText("Jon Haddow").click();

		cy.url().should("equal", Cypress.config().baseUrl);
	});

	it("-> blog", () => {
		cy.visit("/about");

		cy.findByText("Blog").click();

		cy.url().should("include", "/blog");
	});
});

describe("blog", () => {
	it("-> homepage", () => {
		cy.visit("/blog");

		cy.findByText("Jon Haddow").click();

		cy.url().should("equal", Cypress.config().baseUrl);
	});

	it("-> about", () => {
		cy.visit("/blog");

		cy.findByText("About").click();

		cy.url().should("include", "/about");
	});
});
