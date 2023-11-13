describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('checks the application title', () => {
    cy.title().should('eq', 'TAT Customer Service Center')
  })

  it('fills in the required fields and submits the form', () => {
    cy.get('#firstName').click().clear().type('LA', { delay: 30 })
    cy.get('#lastName').click().clear().type('Alquiroz', { delay: 30 })
    cy.get('#email')
      .click()
      .clear()
      .type('rossalquiroz@gmail.com', { delay: 30 })
    cy.get('#open-text-area')
      .click()
      .clear()
      .type('Sample text area automatic typing, Lorem Ipsum Lorem Ipsum', {
        delay: 30,
      })

    cy.get('.button').should('be.visible').click()
    cy.get('.success')
      .should('be.visible')
      .then((res) => {
        expect(res[0].innerText).to.contain('Message successfully')
      })
  })

  it('displays an error message when submitting the form with an email with invalid formatting', () => {
    cy.get('#firstName').click().clear().type('LA', { delay: 30 })
    cy.get('#lastName').click().clear().type('Alquiroz', { delay: 30 })
    cy.get('#email')
      .click()
      .clear()
      .type('rossalquirozgmail.com', { delay: 30 })
    cy.get('#open-text-area')
      .click()
      .clear()
      .type('Sample text area automatic typing, Lorem Ipsum Lorem Ipsum', {
        delay: 30,
      })

    cy.get('.button').should('be.visible').click()
    cy.get('.error')
      .should('be.visible')
      .then((res) => {
        expect(res[0].innerText).to.contain('Validate the required fields')
      })
  })

  it('check that phone field does not accept non-numeric input', () => {
    cy.get('#phone')
      .as('checkAlphabetType')
      .should('be.visible')
      .clear()
      .type('testing')
    cy.get('@checkAlphabetType').should('be.empty')
  })

  it('displays an error message when the phone becomes required but is not filled in before the form submission', () => {
    cy.get('#firstName').click().clear().type('LA', { delay: 30 })
    cy.get('#lastName').click().clear().type('Alquiroz', { delay: 30 })
    cy.get('#email')
      .click()
      .clear()
      .type('rossalquirozgmail.com', { delay: 30 })
    cy.get('#open-text-area')
      .click()
      .clear()
      .type('Sample text area automatic typing, Lorem Ipsum Lorem Ipsum', {
        delay: 30,
      })

    cy.get('#phone-checkbox')
      .check()
      .then(() => {
        cy.get('#phone').should('have.attr', 'required')
      })

    cy.get('.button').should('be.visible').click()
    cy.get('.error')
      .should('be.visible')
      .then((res) => {
        expect(res[0].innerText).to.contain('Validate the required fields')
      })
  })

  it('fills and clears the first name, last name, email, and phone fields', () => {
    cy.get('#firstName')
      .click()
      .clear()
      .type('LA', { delay: 30 })
      .should('have.value', 'LA')
      .clear()
      .should('be.empty')
    cy.get('#lastName')
      .click()
      .clear()
      .type('Alquiroz', { delay: 30 })
      .should('have.value', 'Alquiroz')
      .clear()
      .should('be.empty')
    cy.get('#email')
      .click()
      .clear()
      .type('rossalquirozgmail.com', { delay: 30 })
      .should('have.value', 'rossalquirozgmail.com')
      .clear()
      .should('be.empty')
    cy.get('#phone')
      .click()
      .clear()
      .type('09090909', { delay: 30 })
      .should('have.value', '09090909')
      .clear()
      .should('be.empty')
  })

  it('', () => {
    cy.get('.button').should('be.visible').click()
    cy.get('.error')
      .should('be.visible')
      .then((res) => {
        expect(res[0].innerText).to.contain('Validate the required fields')
      })
  })
})
