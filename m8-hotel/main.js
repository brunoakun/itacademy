const arrayHoteles = [];

function crearHotel() {
    let hotelData = {
        nombre: prompt('nombre: '),
        habitaciones: prompt('habitaciones: '),
        plantas: prompt('plantas: '),
        superficie: prompt('superficie: ')
    }
    const hotel = new Hotel(hotelData.nombre, hotelData.habitaciones, hotelData.plantas, hotelData.superficie);
    arrayHoteles.push(hotel);
    // alert(`Creado el Hotel ${hotelData.nombre} dentro del array arrayHoteles[]`);
    muestraTodos();
}


function datosHotel() {
    let nombre = prompt('nombre: ');
    veureHotel(nombre);
}


function veureHotel(nombre) {
    let result = '';
    if (arrayHoteles.length == 0) {
        result = "Hotel " + nombre + " <b>NO existe</b>";
        result += "<hr>";
        divResultado.innerHTML = result;
        return;
    }
    for (i = 0; i < arrayHoteles.length; i++) {
        if (arrayHoteles[i].nombre == nombre) {
            result += 'Hotel nº ' + i;
            result += arrayHoteles[i].getDescipcion();
            result += 'Costo: ' + arrayHoteles[i].calcularManteniment() + " €<br>";
        }
    }
    if (result == '') result = "Hotel " + nombre + " <b>NO existe</b>";
    divResultado.innerHTML = result;
}


function donarDeBaixaHotel() {
    let nombre = prompt('Nombre a BORRAR: ');
    let result = '';
    let borrado = false;
    for (i = 0; i < arrayHoteles.length; i++) {
        if (arrayHoteles[i].nombre == nombre) {
            arrayHoteles.splice(i, 1);
            borrado = true;
        }
    }

    if (borrado) {
        result += `Borrado el Hotel ${nombre} dentro del array arrayHoteles[]`;
    } else {
        result += `Hotel ${nombre} NO existe `;
    }
    divResultado.innerHTML = result;
    muestraTodos();
}


function muestraTodos() {
    let result = '';
    if (!arrayHoteles) return;
    for (i = 0; i < arrayHoteles.length; i++) {
        // result += i + " - " + arrayHoteles[i].nombre + "  ";
        result += `<button onclick="veureHotel('${arrayHoteles[i].nombre}')">Ver Hotel ${arrayHoteles[i].nombre}</button><br>`;
    }
    divResultado2.innerHTML = result;
}