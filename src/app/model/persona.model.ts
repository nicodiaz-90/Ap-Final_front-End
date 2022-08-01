export class persona{
    id?: number; //Con el signo de interrogacion despues de id, se indica que esta propiedad no es obligatoria
    nombre: String;
    apellido: String
    img: String;

    constructor(nombre: String, apellido: String, img: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
    }
}