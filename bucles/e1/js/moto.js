class Moto {

    // ATRIBUTOS
    static contador = 1;
    constructor(marca, cilindrada) {
        this._marca = marca;
        this._cilindrada = cilindrada;
        this._contador = Moto.contador++;
    }

    //GETTERS SETTERS
    get marca() { return this._marca; }
    get cilindrada() { return this._cilindrada; }
    get contador() { return this._contador; }

    set marca(val) { this._marca = val; }
    set cilindrada(val) { this._cilindrada = val; }

    //METODOS
    datosMoto() {
        return (`La moto núm ${this._contador} es una ${this.marca} con una cilindrada de ${this.cilindrada}`)
    }

}