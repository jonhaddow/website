it("should render the heading", () => {
  cy.visit("/");

  cy.findByRole("heading", { name: /Jon Haddow/ }).should("exist");
  cy.findByText("Web Developer").should("exist");
});

it('should render the "Read more" link to about page', () => {
  cy.visit("/");

  cy.findByRole("link", { name: /Read more/ }).should(
    "have.attr",
    "href",
    "/about/"
  );
});

it('should render the "/View all posts" link to blog page', () => {
  cy.visit("/");

  cy.findByRole("link", { name: /View all posts/ }).should(
    "have.attr",
    "href",
    "/blog/"
  );
});
