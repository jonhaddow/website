// Define at the top of the spec file or just import it
function terminalLog(violations: any[]) {
  if (!violations) return;
  cy.task(
    "log",
    `${violations.length} accessibility violation${
      violations.length === 1 ? "" : "s"
    } ${violations.length === 1 ? "was" : "were"} detected`,
  );
  // pluck specific keys to keep the table readable
  const violationData = violations.map(
    ({ id, impact, description, nodes }) => ({
      id,
      impact,
      description,
      nodes: nodes.length,
    }),
  );

  cy.task("table", violationData);
}

it("Has no detectable a11y violations on load", () => {
  cy.visit("/blog");
  cy.injectAxe();

  cy.findByRole("heading", { name: /Blog/ }).should("exist");
  cy.checkA11y(undefined, undefined, terminalLog);
});
