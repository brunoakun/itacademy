let datosPc1 = {
    marca: 'ibm',
    modelo: 'modelo1',
    cpu: 'pentium 5',
    ram: '16 Gb',
    hd: '1 Tb'
}

let ordenador1 = new Ordenador(datosPc1.marca, datosPc1.modelo, datosPc1.cpu, datosPc1.ram, datosPc1.hd);
let ordenador2 = new Ordenador("marca2", datosPc1.modelo, datosPc1.cpu, datosPc1.ram);
let divResultado = document.getElementById("divResultado");

alert(`marca del ordenador1 es ${ordenador1._marca}`);  // Usamos el getter
divResultado.innerHTML = '<h1>ordenador1</h1>' + ordenador1.getDescipcion();
divResultado2.innerHTML = '<h1>ordenador2</h1>' + ordenador2.getDescipcion();
