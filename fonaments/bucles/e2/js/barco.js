class Barco {
    // PROPIEDADES

    static serialNum = 0;
    constructor(nombre, eslora) {
        this._nombre = nombre;
        this._eslora = eslora;
        this.serialNum = Barco.serialNum++;
    }
    // GETERS & SETTERS
    get nombre() { return this._nombre; }
    get eslora() { return this._eslora; }

    set nombre(nombre) { this._nombre = nombre; }
    set eslora(eslora) { this._eslora = eslora; }

    // METODOS
    getInfo(){
        return(`El barco ${this.serialNum} - ${this.nombre} tiene una eslora de ${this.eslora}`);
    }
}