describe('Test - Formulario', () => {
  it('Completar los campos existosamente', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.contains('Automation Testing Practice').should('be.visible')
    cy.get('#name').type('Test')
    cy.get('input[placeholder="Enter EMail"]').type('lel@gmail.com')
    cy.get('#phone').type('34545634652')
    cy.get('input[value="female"]').click()
    cy.get('input[type="checkbox"]').check('sunday')
    cy.get('#country').select('Canada')
    cy.get('#colors').select('Red')
    cy.get('#datepicker').click()
    cy.get('a[data-date="24"]').click()
    cy.get('#datepicker').should('have.value','08/24/2025')
    cy.get('#singleFileInput').selectFile('cypress\\fixtures\\imgTest.png')
    cy.get('#singleFileInput').should('have.value','C:\\fakepath\\cypress\\fixtures\\imgTest.png')
  })
  it('Validar botón Enter', () => {
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[name="start"]').click()
    cy.get('button[name="stop"]').should('be.visible')
    cy.contains('STOP').should('be.visible')
    cy.contains('button','STOP').click()
  })

  it('Selección de elementos de tipo checkbox',()=>{
    cy.viewport('ipad-mini','landscape')
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('input[class="form-check-input"][type="checkbox"]').each(($check)=>{
      let valueText = $check.attr('value')
      if(valueText.startsWith('s')){
        cy.wrap($check).check()
      }
    })
  })

  /*it.only('Selección de Link que abre en otra ventana',()=>{
    cy.visit('https://testautomationpractice.blogspot.com/')
    cy.get('button[onclick="myFunction()"]').invoke('removeAttr','onclick').click()
  }*/
})