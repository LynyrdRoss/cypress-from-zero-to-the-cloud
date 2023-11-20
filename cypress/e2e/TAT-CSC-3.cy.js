describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('selects a product (YouTube) by its content', () => {
    cy.get('select').as('selectYoutube').select('YouTube')
    cy.get('@selectYoutube').should('have.value', 'youtube')
  })

  it('selects a product (Mentorship) by its value', () => {
    cy.get('select').as('selectYoutube').select('Mentorship')
    cy.get('@selectYoutube').should('have.value', 'mentorship')
  })

  it('selects a product (Blog) by its index', () => {
    cy.get('select').as('selectYoutube').select('Blog')
    cy.get('@selectYoutube').should('have.value', 'blog')
  })
})
