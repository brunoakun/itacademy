let msgDiv = document.getElementById('msgDiv');

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
    msgDiv.innerHTML = '';
    let dni = prompt('Entra dni del cliente a crear').toUpperCase();
    let valido = existeDni(dni);
    console.log(`Valido= ${valido.existe}  ${valido.i}`);
    if (!valido.existe) {
        let nombre = prompt('Entra nombre del cliente').toUpperCase();
        const cliente = new Cliente(dni, nombre);
        CLIENTES.push(cliente);
        muestraClientes();
    } else {
        msgDiv.innerHTML = `El cliente ya existe en la posición ${valido.indice} con nombre ${CLIENTES[valido.indice]._nombre}`;
    }
}

// Borrar n cliente
function borrarCliente() {
    msgDiv.innerHTML = '';
    let dni = prompt('Entra dni del cliente a borrar').toUpperCase();
    let valido = existeDni(dni);
    if (valido.existe) {
        CLIENTES.splice(valido.indice, 1);
        muestraClientes();
        msgDiv.innerHTML = `Cliente con dni ${dni} BORRADO`;
    } else {
        msgDiv.innerHTML = `El cliente NO existe`;
    }
}

//Crear Cuenta de cliente
function crearCuentaCliente() {
    msgDiv.innerHTML = '';
    let dni = prompt('Entra dni del cliente').toUpperCase();
    let valido = existeDni(dni);
    if (valido.existe) {
        const cuenta = new Cuenta();
        CUENTAS.push(cuenta);
        CLIENTES[valido.indice].addCuenta(cuenta);
        muestraClientes();
    } else {
        msgDiv.innerHTML = `Este DNI no existe`;
    }
}

function movCuenta(tipo) {
    // Crear un movimiento (Ingrso/Reembolso)
    msgDiv.innerHTML = '';
    let ccc = prompt('Nº de cuenta: ');
    let valCuenta = existeCuenta(ccc);
    if (valCuenta.existe) {
        let importe = prompt('Entra el importe');
        if (tipo == 'ingresar') CUENTAS[valCuenta.indice].ingresar(importe);
        if (tipo == 'retirar') CUENTAS[valCuenta.indice].retirar(importe);
    } else {
        msgDiv.innerHTML = `Esta cuenta no existe`;
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
            result += '<li><b>CCC: </b>' + cuenta._numCompte + '<br> <b>Saldo: </b>' + cuenta._saldo + '€ <b> Movimientos:</b> ' + cuenta._numMoviments + ' </li>';
        }
        result += '</ul>';
    }
    divResultado2.innerHTML = result;
}


console.log(CLIENTES);
console.log(CUENTAS);