let datosPcX = {
    marca: 'ibm',
    modelo: 'modelo1',
    cpu: 'pentium 5',
    ram: '16 Gb',
    hd: '1 Tb'
}

const ordenador1 = new Ordenador(datosPcX.marca, datosPcX.modelo, datosPcX.cpu, datosPcX.ram, datosPcX.hd);
const ordenador2 = new Ordenador("marca2", 'modelo xx', '386', '16Mb');   // Sin hd
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
    //   divResultado2.innerHTML = 'ordenador NUEVO:</br>' + ordenador10.getDescipcion();
}


const arrayPc = [];

function nuevoPCArr() {
    alert("nuevo PC dentro del array arrayPc[]");
    let datosPcX = {
        marca: prompt('Marca: '),
        modelo: prompt('Modelo: '),
        //   cpu: prompt('CPU: '),
        //    ram: prompt('Ram: '),
        //   hd: prompt('HD: ')
    }
    let ordenadorX = new Ordenador(datosPcX.marca, datosPcX.modelo, datosPcX.cpu, datosPcX.ram, datosPcX.hd);
    arrayPc.push(ordenadorX);
    let result = '';
    if (arrayPc.length == 0) return;

    for (i = 0; i < arrayPc.length; i++) {
        result += 'Ordenador nº ' + i + arrayPc[i].getDescipcion() + "<hr>";
    }
    divResultado2.innerHTML = result;

}

