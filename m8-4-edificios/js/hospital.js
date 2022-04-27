

class Hospital extends Edificio {

    // PROPIEDADES
    constructor(nombre, plantas, superficie, pacientes, tipo = "hospital") {
        // Hereda de la clase superior
        super(nombre, plantas, superficie, tipo);
        this._pacientes = pacientes;
    }

    // GETTERS & SETTERS
    get pacientes() { return this._pacientes; }
    set pacientes(pacientes) { this._pacientes = pacientes; }

    // METODOS
    repartirDinar(raciones) {
        return (`S’estan repartint ${this.raciones} racions`)
    }
}