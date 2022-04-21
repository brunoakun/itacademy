class Cliente {

    constructor(dni, nombre) {
        this._dni = dni;
        this._nombre = nombre;
        this._cuentas = [];
    }

    // GETTERS y SETTERS

    get getNom() { return this._setNom; }
    get getDni() { return this._setDni; }
    get getCuenta() { return this._cuenta; }

    set setNom(val) { this._setNom = val; }
    set setDni(val) { this._setDni = val; }
    set setCuenta(val) { this._cuenta = val; }

    // METODOS

    getInfo(){
        return(`El cliente ${this.getNom} ${this.getDni} tiene `)
    }

    addCuenta(ccc) {
        // añadir una cuenta al cliente
        this._cuentas.push(ccc);
        //this.setCuenta.push(ccc);
    }
}