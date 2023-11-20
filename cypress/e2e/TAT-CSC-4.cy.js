describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('checks the type of service "Feedback"', () => {
    cy.get('input[value="feedback"]').click().should('be.checked')
  })

  it('checks each type of service', () => {
    cy.get('.field input[type="radio"]').each(($el, index, $list) => {
      cy.wrap($el).check().should('be.checked')
    })
  })
})
