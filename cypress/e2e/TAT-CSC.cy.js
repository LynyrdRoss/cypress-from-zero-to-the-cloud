describe('TAT Customer Service Center', () => {
  it('checks the application title', () => {
    cy.visit(Cypress.env('localBaseUrl'))

    cy.title().should('eq', 'TAT Customer Service Center')
  })
})
