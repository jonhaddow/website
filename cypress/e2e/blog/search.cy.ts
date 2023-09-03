it("should filter items when a query is entered", () => {
  cy.visit("/blog");

  cy.findByLabelText("Search posts").type("CSS-in-JS");

  cy.findAllByRole("link", { name: /CSS-in-JS/ }).should(
    "have.length.at.least",
    1,
  );
});
