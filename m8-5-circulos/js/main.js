let CIRCULOS = [];
let PUNTOS = [];


// Crear un nuevo circulo

function crearCirculo() {
    let x1 = parseInt(document.getElementById('x1').value);
    let y1 = parseInt(document.getElementById('y1').value);
    let r1 = parseInt(document.getElementById('r1').value);
    if (x1 && y1 && r1) {
        let circulo = new Circulo(x1, y1, r1);
        CIRCULOS.push(circulo);
        console.log(CIRCULOS);
    } else {
        alert(`Valores NO validos para crear un círculo`);
    }
    muestraCirculos();
}

//Calcuar distancia entre centros

function calculaDistancia() {
    let msg = '';
    msg = `LA distacia entre centros es de ${CIRCULOS[0].distanciaEntreCentros(CIRCULOS[1])}`;
    // document.getElementById('result').innerHTML = msg;
    alert(msg);

}

function muestraCirculos() {
    if (CIRCULOS.length < 2) return;
    let msg = '';
    msg += `x=${CIRCULOS[0].x} - y=${CIRCULOS[0].y} - radio=${CIRCULOS[0].radio}   <br>`;
    msg += `x=${CIRCULOS[1].x} - y=${CIRCULOS[1].y} - radio=${CIRCULOS[1].radio}   <br>`;
    document.getElementById('result').innerHTML = msg;

}