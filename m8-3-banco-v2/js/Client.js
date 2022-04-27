class Cliente {

    constructor(dni, nombre) {
        this._dni = dni;
        this._nombre = nombre;
        this._cuentas = [];
    }

    // GETTERS y SETTERS

    get getNom() { return this._nombre; }
    get getDni() { return this._dni; } 

    set setNom(val) { this._setNom = val; }
    set setDni(val) { this._setDni = val; } 

    // METODOS

    getInfo(){
        return(`El cliente ${this.getNom} ${this.getDni} tiene  ${this._cuentas.length} cuentas`)
    }

    addCuenta(ccc) {
        // añadir una cuenta al cliente
        this._cuentas.push(ccc);
        //this.getCuenta.push(ccc);
    }
}