class Circulo extends Punto {

    // ATRIBUTOS

    constructor(x, y, radio) {
        super(x, y);    // Hereda de la clase superior
        this._radio = radio;    // Solo defino la nueva propiedad carrera
    }

    // GETTERS & SETTERS
    get radio() { return this._radio; }
    set radio(radio) { this._radio = radio; }

    // METODOS

    distanciaEntreCentros(circulo2) {
        let c1 = Math.pow((this.x - circulo2.x), 2);
        let c2 = Math.pow((this.y - circulo2.y), 2);
        let dis = Math.sqrt(c1 + c2);
        return (parseFloat(dis));
    }
}