///reference types= 'cypress'
//import {before} from Mocha
import Login from '../support/Pages/Login'
import Productos from '../support/Pages/Productos'
import { crearDestinatario } from '../support/Factories/destinatario.js'
import cypress from 'cypress'

describe('Realizar login',function() {
    const credencialesObj = {
        standard: "standard_user",
        locked: "locked_out_user",
        password: "secret_sauce"
    }
    before(function() {
        cy.fixture('credencialesFixture').then((datos)=>{
            this.credencialesExt = datos
        })
    })
    beforeEach(function() {
        cy.fixture('crencialesFixture')
        Login.accesoURL('/')
        cy.url().should('include','saucedemo')
    })
    it("Realizar login con éxito",function() {
        Login.completarUsername(this.credencialesExt.users.standard)
        Login.completarPassword(this.credencialesExt.passwords.password_valido)
        Login.clicarLogin()
        Productos.validarLabelProductos()
    })

    it("Realizar Login e informar contraseña",function() {
        Login.completarUsername('standard_user')
        Login.clicarLogin()
        Login.validarMensajeDeError('Epic sadface: Password is required')
        Login.validarContenido('Password is required')
    })

    it("Realizar Login e informar usuario",function() {
        Login.completarPassword('secret_sauce')
        Login.clicarLogin()
        Login.validarMensajeDeError('Epic sadface: Username is required')
        Login.validarContenido('Username is required')
    })

    const destinatarioFaker = crearDestinatario()

    it.only("Realizar compra con éxito",function() {
        Login.completarUsername(this.credencialesExt.users.standard)
        Login.completarPassword(this.credencialesExt.passwords.password_valido)
        Login.clicarLogin()
        Productos.validarLabelProductos()
        cy.get('button[class="btn_primary btn_inventory"]').first().click()
        cy.get('a[class="shopping_cart_link fa-layers fa-fw"]').click()
        cy.get('a[class="btn_action checkout_button"]').click()
        cy.get('#fist-name').type(destinatarioFaker.firstName)
        cy.get('#last-name').type(destinatarioFaker.lastName)
        cy.get('#postal-code').type(destinatarioFaker.zipCode)
        cy.get('input[class="btn_primary cart_button"]').click()
        cy.get('a[class="btn_action cart_button"]').click()
        cy.get('h2[class="complete-header"]').should('have.text','THANK YOU FOR YOUR ORDER')
        //let valorAleatorio = cypress._.random(0,5)
    })
})