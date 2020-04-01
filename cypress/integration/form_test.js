// npx cypress open  <-- to open cypress in browser
// npx cypress run <-- to run tests in terminal instead of browser
// npx cypress run --spec "cypress/integreatio/filename.js" <-- to run a specific suite in terminal
describe("Test our inputs and submit our form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Add text to inputs and submit form", () => {
    cy.get('input[name="name"]')
      .type("John Doe")
      .should("have.value", "John Doe");

    cy.get('input[name="email"]')
      .type("johndoe@gmail.com")
      .should("have.value", "johndoe@gmail.com");

    cy.get('textarea[name="motivation"]')
      .type("testing textarea input")
      .should("have.value", "testing textarea input");

    cy.get('select[name="positions"]')
      .select("Yard Work")
      .should("have.value", "Yard Work");

    cy.get('input[name="terms"]')
      .check()
      .should("be.checked");
    cy.get("[data-cy=submit]").click();
  });
});
