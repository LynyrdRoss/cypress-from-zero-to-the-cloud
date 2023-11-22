describe('TAT Customer Service Center', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localBaseUrl'))
  })

  it('selects a file from the fixtures folder', () => {
    const fileName = 'example.json'

    cy.get('#file-upload')
      .selectFile(`cypress/fixtures/${fileName}`)
      .should((file) => {
        expect(file[0].value).to.contain(fileName)
        expect(file[0].files[0].name).to.contain(fileName)
      })
  })

  it('selects a file simulating a drag-and-drop', () => {
    const fileName = 'example.json'

    cy.get('#file-upload')
      .selectFile(`cypress/fixtures/${fileName}`, {
        action: 'drag-drop',
      })
      .should((file) => {
        expect(file[0].value).to.contain(fileName)
        expect(file[0].files[0].name).to.contain(fileName)
      })
  })

  it('selects a file using a fixture to which an alias was given', () => {
    const fileName = 'example.json'
    cy.fixture(fileName, null).as('fixtureFile')

    cy.get('#file-upload')
      .selectFile('@fixtureFile')
      .should((file) => {
        expect(file[0].value).to.contain(fileName)
        expect(file[0].files[0].name).to.contain(fileName)
      })
  })
})
