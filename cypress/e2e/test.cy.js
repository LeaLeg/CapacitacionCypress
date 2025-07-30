describe('Test - Formulario', () => {
  it('Completar los campos existosamente', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('#name').type('Test')
    cy.get('input[placeholder="Enter EMail"]').type('lel@gmail.com')
    cy.get('#phone').type('34545634652')
  })
  it('Enviar archivos', () => {
    //cy.visit('https://example.cypress.io')
  })
})