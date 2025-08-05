import Login from '../support/Pages/Login'
import Productos from '../support/Pages/Productos'
describe('Realizar login',()=>{
    
    it("Realizar login con éxito",() => {
        Login.accesoURL()
        Login.completarUsername('standard_user')
        Login.completarPassword('secret_sauce')
        Login.clicarLogin()
        Productos.validarLabelProductos()
    })

    it("Realizar Login e informar contraseña",() => {
        Login.accesoURL()
        Login.completarUsername('standard_user')
        Login.clicarLogin()
        Login.validarMensajeDeError('Epic sadface: Password is required')
        Login.validarContenido('Password is required')
    })

    it.only("Realizar Login e informar usuario",() => {
        Login.accesoURL()
        Login.completarPassword('secret_sauce')
        Login.clicarLogin()
        Login.validarMensajeDeError('Epic sadface: Username is required')
        Login.validarContenido('Username is required')
    })
})