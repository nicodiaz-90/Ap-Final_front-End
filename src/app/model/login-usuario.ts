export class LoginUsuario {
    nombreUsuario: string;
    password: string;

    constructor(nombreUsuario: string, password: string){ //Si no funciona cambiar String por string
        this.nombreUsuario = nombreUsuario;
        this.password = password;
    }
}
