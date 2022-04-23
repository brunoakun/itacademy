// Crear clientes de prueba
let CLIENTES = [];

const cliente1 = new Cliente("46339987R", "Bruno");
const cliente2 = new Cliente("1254785F", "Quka");

// Crear cuentas de prueba
let CUENTAS = [];
const cuenta1 = new Cuenta(0);
const cuenta2 = new Cuenta(200);
CUENTAS.push(cuenta1);
CUENTAS.push(cuenta2);

cliente1.addCuenta(cuenta1);
cliente1.addCuenta(cuenta2);

CLIENTES.push(cliente1);
CLIENTES.push(cliente2);

// Crear movimientos
cuenta1.ingresar(100);

// Mostrar datos
muestraClientes();



//Crear cliente
function crearCliente() {
    let dni = prompt('Entra dni del cliente').toUpperCase();
    let valido = existeDni(dni);
    console.log(`Valido= ${valido.existe}  ${valido.i}`);
    if (!valido.existe) {
        let nombre = prompt('Entra nombre del cliente').toUpperCase();
        const cliente = new Cliente(dni, nombre);
        CLIENTES.push(cliente);
        muestraClientes();
    } else {
        alert(`El cliente ya existe en la posición ${valido.indice} con nombre ${CLIENTES[valido.indice]._nombre}`);
    }
}

//Crear Cuenta de cliente
function crearCuentaCliente() {
    let dni = prompt('Entra dni del cliente').toUpperCase();
    let valido = existeDni(dni);
    if (valido.existe) {
        const cuenta = new Cuenta();
        CUENTAS.push(cuenta);
        CLIENTES[valido.indice].addCuenta(cuenta);
        muestraClientes();
    } else {
        alert(`Este DNI no existe`);
    }
}

function movCuenta(tipo) {
    let ccc = prompt('Nº de cuenta: 2081 - ');
    let valCuenta = existeCuenta(ccc);
    if (valCuenta.existe) {
        let importe = prompt('Entra el importe');
        if (tipo == 'ingresar') CUENTAS[valCuenta.indice].ingresar(importe);
        if (tipo == 'retirar') CUENTAS[valCuenta.indice].retirar(importe);
    } else {
        alert('Esta cuenta NO existe');
    }
    muestraClientes();
}

retirarEnCuenta

// Validar DNI
function existeDni(dni) {
    let existe = false;
    for (i = 0; i < CLIENTES.length; i++) {
        dniCli = CLIENTES[i]._dni;
        if (dniCli == dni) {
            existe = true;
            break;
        }
    }
    return {
        'dni': dni,
        'existe': existe,
        'indice': i
    }
}

// Validar cuenta
function existeCuenta(ccc) {
    ccc = '2081 - ' + ccc;
    let existe = false;
    for (i = 0; i < CUENTAS.length; i++) {
        cccCuenta = CUENTAS[i]._numCompte;
        if (cccCuenta == ccc) {
            existe = true;
            break;
        }
    }
    return {
        'ccc': ccc,
        'existe': existe,
        'indice': i
    }
}

// Muestra datos de clientes y sus cuentas
function muestraClientes() {
    let result = '';
    for (cliente of CLIENTES) {
        result += cliente.getNom + ' ' + cliente.getDni + ' - ' + cliente._cuentas.length + ' Cuentas';
        result += '<ul>'
        for (cuenta of cliente._cuentas) {
            result += '<li>CCC: ' + cuenta._numCompte + ' Saldo: ' + cuenta._saldo + ' Movimientos: ' + cuenta._numMoviments + ' </li>';
        }
        result += '</ul>';
    }
    divResultado2.innerHTML = result;
}


console.log(CLIENTES);
console.log(CUENTAS);