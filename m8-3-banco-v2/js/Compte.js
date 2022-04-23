class Cuenta {
    static contador = 0;    // Generador de número de cuentas

    constructor(saldo = 0) {
        this._saldo = saldo;
        this._numCompte =   Cuenta.contador ++;
        this._numMoviments = 0;
    }


    // GETTERS y SETTERS

    get getSaldo() { return this._saldo; }
    get getNumCompte() { return this._numCompte; }
    get getNumMoviments() { return this._numMoviments; }

    set setNumCompte(c) { this._numCompte = c; }
    set setSaldo(s) { this._saldo = s; }
    set setNumMoviments(m) { this._numMoviments = m; }

    // METODOS

    toString() {
        return `El compte ${this.getNumCompte} té un saldo de ${this.getSaldo}`;
    }

    ingresar(quantitat) {
        this._saldo += parseInt(quantitat);
        this._numMoviments += 1;
        console.log(this);
    }

    retirar(quantitat) {
        if (parseInt(quantitat) <= this._saldo) {
            this._saldo -= parseInt(quantitat);
            this._numMoviments += 1;
            //console.log(this);
        } else {
            alert('No hay suficiente SALDO');
        }
    }
    retornarSaldo() {
        alert(`El saldo actual es: ${this.getSaldo}`);
    }
    obtenirNumTransaccions() {
        alert(`El nombre de transaccions d'aquest compte és de: ${this.getNumMoviments}`)
    }
}