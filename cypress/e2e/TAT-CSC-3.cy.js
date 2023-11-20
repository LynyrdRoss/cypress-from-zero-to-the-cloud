describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('selects a product (YouTube) by its content', () => {
    cy.get('#product').select('YouTube').should('have.value', 'youtube')
  })

  it('selects a product (Mentorship) by its value', () => {
    cy.get('#product').select('Mentorship').should('have.value', 'mentorship')
  })

  it('selects a product (Blog) by its index', () => {
    cy.get('#product').select('Blog').should('have.value', 'blog')
  })
})
