describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('checks both checkboxes, then unchecks the last one', () => {
    cy.get('#check input[type="checkbox"]').check().should('be.checked')

    cy.get('#phone-checkbox').uncheck().should('not.be.checked')
  })
})
