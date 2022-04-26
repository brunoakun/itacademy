class Edificio {

    // PROPIEDADES
    constructor(nombre, plantas, superficie) {
        this._nombre = nombre;
        this._plantas = plantas;
        this._superficie = superficie;
    }

    //GETTERS & SETTERS

    get nombre() {return this._nombre;}
    get plantas() {return this._plantas;}
    get superficie() {return this._superficie;}
     
    set superficie(superficie) {this._superficie = superficie;}     
    set plantas(plantas) {this._plantas = plantas;}     
    set nombre(nombre) {this._nombre = nombre;}

    // METODOS

}

class Hospital extends Edificio {

    constructor(pacientes) {
        this._pacientes = pacientes;

         // Hereda de la clase superior
        super(nombre);
        super(plantas);
        super(superficie);
    }

    // METODOS
    repartirDinar() {

    }
}