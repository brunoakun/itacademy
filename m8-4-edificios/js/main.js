
/**
 * Hospitales
 */

console.log('__________________ Hospitales ____________________');

HOSPITALES = [];
let h1 = { 'nombre': 'Sagrada Familia', 'plantas': 40, 'superficie': 50000, 'pacientes': 10000 };
let h2 = { 'nombre': 'Tecknon', 'plantas': 15, 'superficie': 18000, 'pacientes': 750 };

hospital1 = new Hospital(h1.nombre, h1.plantas, h1.superficie, h1.pacientes);
hospital2 = new Hospital(h2.nombre, h2.plantas, h2.superficie, h2.pacientes);

HOSPITALES.push(hospital1, hospital2);
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

CINES.push(cine1, cine2);

// Calcular recaudación:

//let asistentes = parseInt(prompt(`¿Cual ha sido el número de asistentes?`));
//let precioEntrada = parseFloat(prompt(`¿precio de la Entrada?`));
let asistentes = 22;
let precioEntrada = 55;

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



/**
 * Hoteles
 */

console.log('__________________ Hoteles ____________________');

HOTELES = [];
let hot1 = { 'nombre': 'Ritz', 'plantas': 10, 'superficie': 758, 'habitaciones': 564 };
let hot2 = { 'nombre': 'Mandarín', 'plantas': 24, 'superficie': 2654, 'habitaciones': 1231 };

hotel1 = new Hotel(hot1.nombre, hot1.plantas, hot1.superficie, hot1.habitaciones);
hotel2 = new Hotel(hot2.nombre, hot2.plantas, hot2.superficie, hot2.habitaciones);

HOTELES.push(hotel1, hotel2);

muestraHoteles();

function muestraHoteles() {
    for (hotel of HOTELES) {
        console.log(hotel.infoHotel());
    }
}


//////////////////////////////////////


function crearHospital() {
    let h1 = { 'nombre': prompt("Hospi nombre?"), 'plantas': prompt("plantas?"), 'superficie': prompt("Superficie?"), 'pacientes': prompt("Pacientes?") };
    const hospital = new Hospital(h1.nombre, parseInt(h1.plantas), parseInt(h1.superficie), parseInt(h1.pacientes));
    HOSPITALES.push(hospital);

    muestraHospitales()
}
