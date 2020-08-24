describe("homepage", () => {
	it("-> about", () => {
		cy.visit("/");

		cy.findByText("About").click();

		cy.findByRole("heading", { name: /About/ }).should("exist");
	});

	it("-> blog", () => {
		cy.visit("/");

		cy.findByText("Blog").click();

		cy.findByRole("heading", { name: /Blog/ }).should("exist");
	});
});

describe("about", () => {
	it("-> homepage", () => {
		cy.visit("/about");

		cy.findByText("Jon Haddow").click();

		cy.findByRole("heading", { name: /Jon Haddow/ }).should("exist");
		cy.findByText("Web Developer").should("exist");
	});

	it("-> blog", () => {
		cy.visit("/about");

		cy.findByText("Blog").click();

		cy.findByRole("heading", { name: /Blog/ }).should("exist");
	});
});

describe("blog", () => {
	it("-> homepage", () => {
		cy.visit("/blog");

		cy.findByText("Jon Haddow").click();

		cy.findByRole("heading", { name: /Jon Haddow/ }).should("exist");
		cy.findByText("Web Developer").should("exist");
	});

	it("-> about", () => {
		cy.visit("/blog");

		cy.findByText("About").click();

		cy.findByRole("heading", { name: /About/ }).should("exist");
	});
});
