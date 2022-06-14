describe("My First Test", () => {
  it("User can't submit data when name is missing", () => {
    cy.visit("http://localhost:8080/add");

    cy.get(".name__input").type("I love Cypress and Cyprus");

    cy.get(".name__input")
      .invoke("val")
      .should((value) => {
        expect(value).not.to.eq("");
      });

    cy.get("button").click();
  });

  it("User can't vote when beyound 10 votes", () => {
    cy.visit("http://localhost:8080/list");

    for (let i = 0; i <= 10; i++) {
      cy.get(".bmi__counter").first().click();
    }

    cy.get(".bmi__counter")
      .first()
      .should((value) => expect(value).not.to.eq(value >= 10));
  });
});
