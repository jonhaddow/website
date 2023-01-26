describe("homepage", () => {
  it("-> about", () => {
    cy.visit("/");

    cy.findByRole("link", { name: "About" }).should(
      "have.attr",
      "href",
      "/about/"
    );
  });

  it("-> blog", () => {
    cy.visit("/");

    cy.findByRole("link", { name: "Blog" }).should(
      "have.attr",
      "href",
      "/blog/"
    );
  });
});

describe("about", () => {
  it("-> homepage", () => {
    cy.visit("/about");

    cy.findByRole("link", { name: /Jon Haddow/ }).should(
      "have.attr",
      "href",
      "/"
    );
  });

  it("-> blog", () => {
    cy.visit("/about");

    cy.findByRole("link", { name: "Blog" }).should(
      "have.attr",
      "href",
      "/blog/"
    );
  });
});

describe("blog", () => {
  it("-> homepage", () => {
    cy.visit("/blog");

    cy.findByRole("link", { name: /Jon Haddow/ }).should(
      "have.attr",
      "href",
      "/"
    );
  });

  it("-> about", () => {
    cy.visit("/blog");

    cy.findByRole("link", { name: "About" }).should(
      "have.attr",
      "href",
      "/about/"
    );
  });
});
