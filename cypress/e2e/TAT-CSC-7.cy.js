describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('verifies that the privacy policy page opens in another tab without the need for a click', () => {
    cy.get('#privacy a')
      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  it('access the privacy policy page by removing the target, then clicking on the link', () => {
    cy.get('#privacy a').invoke('removeAttr', 'target').click()
    cy.url().should('include', 'privacy.html')

    cy.go('back')
    cy.url().should('include', '/src')
  })
})

describe.only('separate independent test', () => {
  it('independently test the privacy policy page', () => {
    cy.visit('./src/privacy.html')

    cy.get('h1#title').should('have.text', 'TAT CSC - Privacy Policy')
    cy.contains('Talking About Testing').should('be.visible')
  })
})
