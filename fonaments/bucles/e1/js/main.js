// Main

let MOTOS = [];

const moto1 = new Moto('Honda', 500);
const moto2 = new Moto('Suzuki', 350);
MOTOS.push(moto1);
MOTOS.push(moto2);

inicio();

moto2.cilindrada = 1100;
inicio();

function inicio() {
    muestraResultado()
    console.log(MOTOS);
}

function muestraResultado() {
    let res = "";
    let resDiv = document.getElementById('resDiv');

    for (moto of MOTOS) {
        res += moto.datosMoto() + "<br>";;
    }
    resDiv.innerHTML += res;
}