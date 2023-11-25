describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('verify the 🐈 in the page', () => {
    cy.get('#cat').should('exist').invoke('show').should('be.visible')
  })
})
