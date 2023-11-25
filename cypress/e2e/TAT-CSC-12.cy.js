describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('check messages (error) without waintg for 3 seconds', () => {
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

    cy.clock()
    cy.contains('button', 'Send').should('be.visible').click()

    cy.get('.error')
      .should('be.visible')
      .then((res) => {
        expect(res[0].innerText).to.contain('Validate the required fields')
      })
    cy.tick(3000)

    cy.get('.error').should('not.be.visible')
  })

  // Repeating this test using loadash times
  it('check messages (success) without waintg for 3 seconds while using loadash times', () => {
    Cypress._.times(3, () => {
      const longText = Cypress._.repeat('Lorem ipsum dolor sit amet', 5)

      cy.get('#firstName').click().clear().type('LA', { delay: 30 })
      cy.get('#lastName').click().clear().type('Alquiroz', { delay: 30 })
      cy.get('#email')
        .click()
        .clear()
        .type('rossalquiroz@gmail.com', { delay: 30 })
      cy.get('#open-text-area').click().clear().type(longText, {
        delay: 30,
      })

      cy.clock()
      cy.contains('button', 'Send').should('be.visible').click()

      cy.get('.success')
        .should('be.visible')
        .then((res) => {
          expect(res[0].innerText).to.contain('Message successfully')
        })
      cy.tick(3000)

      cy.get('.success').should('not.be.visible')
    })
  })

  it('displays and hides the success and error messages using .invoke()', () => {
    cy.get('.success')
      .invoke('show')
      .should('be.visible')
      .invoke('hide')
      .should('not.be.visible')

    cy.get('.error')
      .invoke('show')
      .should('be.visible')
      .invoke('hide')
      .should('not.be.visible')
  })

  it('fills in the text area field using the invoke command', () => {
    cy.get('#open-text-area')
      .invoke('val', 'This is an autopopulated data by Cypress')
      .should('have.value', 'This is an autopopulated data by Cypress')
  })

  it('makes an HTTP request', () => {
    cy.request('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html').then(
      (res) => {
        expect(res.status).to.be.eq(200)
        expect(res.statusText).to.be.ok
        expect(res.body).to.include('TAT CSC')
      }
    )
  })
})
