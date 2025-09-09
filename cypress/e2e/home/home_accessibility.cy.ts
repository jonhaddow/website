it("Has no detectable a11y violations on load", () => {
  cy.visit("/");
  cy.injectAxe();

  cy.findByRole("heading", { name: /Jon Haddow/ }).should("exist");
  cy.testA11y();
});
