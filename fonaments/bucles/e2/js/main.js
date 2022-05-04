BARCOS = [];


// Crear 3 barcos de prueba

const barco1 = new Barco("Akun", 12);
const barco2 = new Barco("Saiola", 7);
const barco3 = new Barco("Xin Xan", 16);
const barco4 = new Barco("Corto Maltes", 9);

BARCOS.push(barco1);
BARCOS.push(barco2);
BARCOS.push(barco3);
BARCOS.push(barco4);

muestraBarcos(BARCOS);
muestraBarcos(BARCOS);


// sumar sus esloras
let totEsloras = 0;
for (barcos of BARCOS) {
    totEsloras += barco.eslora;
}
console.log(`Total esloras: ${totEsloras}`);



function muestraBarcos(ARR) {
    for (barco of ARR) {
        let res = barco.getInfo();
        console.log(res);
    }
}


