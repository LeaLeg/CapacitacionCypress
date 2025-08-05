const el = require ('./elements').ELEMENTS
class Login {
    accesoURL(){
        cy.visit(el.url)
        cy.get(el.imgSwagLabs).should('be.visible')
    }

    completarUsername(username){
        cy.get(el.campoUsername).type(username)
    }

    completarPassword(password){
        cy.get(el.campoPassword).type(password)
    }

    clicarLogin(){
        cy.get(el.botonLogin).click()
    }

    validarMensajeDeError(error){
        cy.get(el.msgError).should('have.text', error)
    }

    validarContenido(error){
        cy.contains(error).should('be.visible')
    }
}
export default new Login()