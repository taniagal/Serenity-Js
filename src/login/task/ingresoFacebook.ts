import { Task, PerformsTasks } from "serenity-js/lib/screenplay";
import { Enter, Click } from "serenity-js/lib/serenity-protractor";
import { Login } from "../ui/login";

export class IngresoNombreUsuario implements Task{
    performAs(actor:PerformsTasks){
        return actor.attemptsTo(Enter.theValue(this.nombreUsuario).into(Login.txtNombreUsuario))
    }
    constructor(private nombreUsuario:string){
    }
}
export class IngresoContrasenia implements Task{
    performAs(actor:PerformsTasks){
        return actor.attemptsTo(Enter.theValue(this.contrasenia).into(Login.txtContrasenia)) 
    }
    constructor(private contrasenia:string){  
    }
}

export class Ingreso implements Task{
    performAs(actor:PerformsTasks){
        return actor.attemptsTo(Click.on(Login.btnIngreso)) 
    }
}

export class IngresoFacebook implements Task{
    contrasenia: string;
    static as(nombreUsuario:string,contrasenia:string){
        return new IngresoFacebook(nombreUsuario,contrasenia);
    }
    performAs(actor:PerformsTasks){
        return actor.attemptsTo(
        new IngresoNombreUsuario(this.nombreUsuario),
        new IngresoContrasenia(this.contrasenia),
        new Ingreso())
    }
    constructor (private nombreUsuario:string,contrasenia:string){
    }
}