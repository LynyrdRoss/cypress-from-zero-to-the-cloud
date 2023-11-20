describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('selects a product (YouTube) by its content', () => {
    cy.get('select').as('selectYoutube').select('YouTube')
    cy.get('@selectYoutube').should('have.value', 'youtube')
  })

  it.only('selects a product (Mentorship) by its value', () => {
    cy.get('select').as('selectYoutube').select('Mentorship')
    cy.get('@selectYoutube').should('have.value', 'mentorship')
  })
})
