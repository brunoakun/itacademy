

class Cine extends Edificio {

    // PROPIEDADES
    constructor(nombre, plantas, superficie, capacidad, tipo = "cine") {
        // Hereda de la clase superior
        super(nombre, plantas, superficie, tipo);
        this._capacidad = capacidad;
    }

    // GETTERS & SETTERS
    get capacidad() { return this._capacidad; }
    set capacidad(capacidad) { this._capacidad = capacidad; }

    // METODOS
    recaudacion(sesion) {
        // multiplicar el preu d’una entrada pel número d’assistents a la sessió,
        let importe = parseFloat(sesion.asistentes * sesion.precioEntrada);
        return (`S’han recaptat ${importe} €`);
    }
}