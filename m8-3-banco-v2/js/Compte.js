class Cuenta{

    constructor (numCompte, saldo = 0){
        this._saldo         = saldo;
        this._numCompte     = numCompte;
        this._numMoviments  = 0;
    }

    get getSaldo() {
        return this._saldo;
    }
     
    set setSaldo(s) {
        this._saldo  = s;
    }
    get getNumCompte() {
        return this._numCompte;
    }
     
    set setNumCompte(c) {
        this._numCompte = c;
    }
    get getNumMoviments() {
        return this._numMoviments;
    }
     
    set setNumMoviments(m) {
        this._numMoviments = m;
    }

    toString(){
        return `El compte ${this.getNumCompte} té un saldo de ${this.getSaldo}`;
    }

    ingresar (quantitat){
        this.setSaldo += parseInt(quantitat);
        this.setNumMoviments ++;
        console.log(this);
    }

    retirar (quantitat){
        if(parseInt(quantitat) <= this.getSaldo){
            this.setSaldo -= parseInt(quantitat);
            this.setNumMoviments ++;
            console.log(this);

        }else{
            alert (`No tens prou saldo`);
        }
    }
    retornarSaldo(){
       alert(`El saldo actual es: ${this.getSaldo}` );
    }
    obtenirNumTransaccions(){
        alert (`El nombre de transaccions d'aquest compte és de: ${this.getNumMoviments}`)
    }
}