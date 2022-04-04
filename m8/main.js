let datosPc1 = {
    marca: 'ibm',
    modelo: 'modelo1',
    cpu: 'pentium 5',
    ram: '16 Gb',
    hd: '1 Tb'
}

let ordenador1 = new Ordenador(datosPc1.marca, datosPc1.modelo, datosPc1.cpu, datosPc1.ram, datosPc1.hd);
let divResultado = document.getElementById("divResultado");

alert("marca:" + ordenador1.getMarca());
divResultado.innerHTML = ordenador1.getDescipcion();
