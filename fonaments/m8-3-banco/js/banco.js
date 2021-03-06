class Cuenta {

    // ATRIBUTOS de la clase cuenta
    constructor(numCuenta, saldo = 0, cliente) {
        this._numCuenta = numCuenta;
        this._saldo = saldo;
        this._cliente = cliente;
        this.movimietos = 0;
    }

    // GETTERS Y SETTERS
    get getNumCuenta() { return this._numCuenta; }
    get getSaldo() { return this._saldo; }
    get getCliente() { return this._cliente; }

    set setNumCuenta(val) { this._numCuenta = val; }
    set setSaldo(val) { this._saldo = val; }
    set setCliente(val) { this._cliente = val; }


    // METODOS DE LA CLASE  

    ingresarImporte(importe) {
        let saldo = this.getSaldo;
        this.setSaldo(saldo + importe);
        this._movimietos++;
        console.log(this);
        return;
    }

}





class Cliente {

    // ATRIBUTOS de la clase cliente
    constructor(nombre, apellidos) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._cuenta = new Array();
    }

    // GETTERS Y SETTERS
    get getNombre() { return this._nombre; }
    get getApellidos() { return this._apellidos; }

    set setNombre(val) { this._nombre = val; }
    set setApellidos(val) { this._apellidos = val; }


    // METODOS DE LA CLASE  

    crearCuenta(ccc) {
        this._cuenta.push(ccc);
    }


}