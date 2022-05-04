class Animal {
    constructor(nombre) {
        this._nombre = nombre;
    }
    get nombre() { return this._nombre; }
    set nombre(newNpmbre) { this._nombre = newNpmbre; }
}

class Gos extends Animal {
    constructor(nombre, numPatas = 4) {
        super(nombre);    // Hereda de la clase superior
        this._numPatas = numPatas;
    }

    get numPatas() { return this._numPatas; }
    set numPatas(newNumPatas) { this._numPatas = newNumPatas; }
}

class Ocell extends Animal {
    constructor(nombre, numAlas) {
        super(nombre);    // Hereda de la clase superior
        this._numAlas = numAlas;
    }

    get numAlas() { return this._numAlas; }
    set numAlas(newNumAlas) { this._numAlas = newNumAlas; }
}