import { Target } from "serenity-js/lib/serenity-protractor";
import { by } from "protractor";

export const Login={
txtNombreUsuario: Target.the('"Nombre usuario"').located(by.id('email')),
txtContrasenia:Target.the('"Contrasenia usuario"').located(by.id('pass')),
btnIngreso:Target.the("Boton ingreso").located(by.css('input[type="submit"'))
}