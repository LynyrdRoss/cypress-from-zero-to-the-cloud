Cypress.Commands.add(
  'gui_fillMandatoryFieldsAndSubmit',
  (
    firstName = 'LA',
    lastName = 'Alquiroz',
    email = 'rossalquiroz@gmail.com'
  ) => {
    cy.get('#firstName').click().clear().type(firstName, { delay: 30 })
    cy.get('#lastName').click().clear().type(lastName, { delay: 30 })
    cy.get('#email').click().clear().type(email, { delay: 30 })
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
  }
)
