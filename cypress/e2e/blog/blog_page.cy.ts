it("should render the blog page heading", () => {
  cy.visit("/blog");

  cy.findByRole("heading", { name: /Blog/ }).should("exist");
});

it("should render the posts", () => {
  cy.visit("/blog");

  cy.findByRole("main").within(() => {
    cy.findAllByRole("link").should("have.length.be.greaterThan", 1);
  });
});
