/**
 * Hospitales
 */

console.log('__________________ Hospitales ____________________');

HOSPITALES = [];
let h1 = { 'nombre': 'Sagrada Familia', 'plantas': 40, 'superficie': 50000, 'pacientes': 10000 };
let h2 = { 'nombre': 'Tecknon', 'plantas': 15, 'superficie': 18000, 'pacientes': 750 };

hospital1 = new Hospital(h1.nombre, h1.plantas, h1.superficie, h1.pacientes);
hospital2 = new Hospital(h2.nombre, h2.plantas, h2.superficie, h2.pacientes);

HOSPITALES.push(hospital1);
HOSPITALES.push(hospital2);
muestraHospitales();

function muestraHospitales() {
    for (hospital of HOSPITALES) {
        console.log(`El hospital ${hospital.nombre} tiene ${hospital.plantas} plantas y un coste de limpieza de ${hospital.netejar()} € y un coste de seguridad de ${hospital.costeVigilancia().coste} € para sus ${hospital.costeVigilancia().vigilantes} vigilantes`);
    }
}

/**
 * Cines
 */

console.log('__________________ Cines ____________________');

CINES = [];
let c1 = { 'nombre': 'Cinesa Diagonal', 'plantas': 1, 'superficie': 500, 'capacidad': 400 };
let c2 = { 'nombre': 'Glorias Multicines', 'plantas': 2, 'superficie': 850, 'capacidad': 850 };

cine1 = new Cine(c1.nombre, c1.plantas, c1.superficie, c1.capacidad);
cine2 = new Cine(c2.nombre, c2.plantas, c2.superficie, c2.capacidad);

CINES.push(cine1);
CINES.push(cine2);

// Calcular recaudación:
let asistentes = parseInt(prompt(`¿Cual ha sido el número de asistentes?`));
let precioEntrada = parseFloat(prompt(`¿precio de la Entrada?`));
if (asistentes > cine1.capacidad) {
    alert(`no pueden haber más de ${cine1.capacidad} asistentes`);
} else {
    let recaudacion = cine1.recaudacion(asistentes, precioEntrada);
    console.log(`El cine ${cine1.nombre} ha recaudado ${recaudacion.toFixed(2)} € en esta sesion`);
}

muestraCines();

function muestraCines() {
    for (cine of CINES) {
        console.log(`El cine ${cine.nombre} tiene un coste de limpieza de ${cine.netejar()} € y un coste de seguridad de ${cine.costeVigilancia().coste} € para sus ${hospital.costeVigilancia().vigilantes} vigilantes`);
    }
}