HOSPITALES = [];
let h1 = {
    'nombre': 'Sagrada Familia',
    'plantas': 40,
    'superficie': 50000,
    'pacientes': 10000
};
let h2 = {
    'nombre': 'Tecknon',
    'plantas': 15,
    'superficie': 18000,
    'pacientes': 750
};


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

