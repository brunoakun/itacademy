// Main

let arrResult = [];
inicio();

function inicio() {
    for (i = 0; i < 100; i++) {
        if (i % 2 == 0) arrResult.push(i);  // Es par
    }
    muestraResultado()

    console.log(arrResult);
}

function muestraResultado() {
    let res = "";
    let resDiv = document.getElementById('resDiv');
    let long = arrResult.length;
    for (i = 0; i < long; i++) {
        res += arrResult[i] + "<br>";
    }
    resDiv.innerHTML += res;
}