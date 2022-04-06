let datosPc1 = {
    marca: 'ibm',
    modelo: 'modelo1',
    cpu: 'pentium 5',
    ram: '16 Gb',
    hd: '1 Tb'
}

let ordenador1 = new Ordenador(datosPc1.marca, datosPc1.modelo, datosPc1.cpu, datosPc1.ram, datosPc1.hd);
let ordenador2 = new Ordenador("marca2", 'modelo xx', '386', '16Mb');   // Sin hd
let divResultado = document.getElementById("divResultado");

//alert(`marca del ordenador1 es ${ordenador1.marca}`);  // Usamos el getter
divResultado.innerHTML = 'ordenador1<br>' + ordenador1.getDescipcion();
divResultado2.innerHTML = 'ordenador2</br>' + ordenador2.getDescipcion();

ordenador1.marca = "HP";
ordenador1.hd = "xx";

console.log(ordenador1.getNombre('Hola mundo'));

//alert(`hd del ordenador1 es ${ordenador1.hd}`);  // Usamos el getter

function nuevoPC() {
    alert("nuevoPC");
    let datosPc1 = {
        marca: prompt('Marca: '),
        modelo: prompt('Modelo: '),
        cpu: prompt('CPU: '),
        ram: prompt('Ram: '),
        hd: prompt('HD: ')
    }
    const ordenador10 = new Ordenador(datosPc1.marca, datosPc1.modelo, datosPc1.cpu, datosPc1.ram, datosPc1.hd);
    divResultado2.innerHTML = 'ordenador NUEVO:</br>' + ordenador10.getDescipcion();
}