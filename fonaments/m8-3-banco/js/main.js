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
    muestraBotones();
    veureHotel(hotelData.nombre);
}


function datosHotel() {
    let nombre = prompt('nombre: ');
    veureHotel(hotelData.nombre);
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
        if (arrayHoteles[i].getNombre == nombre) {
            result += 'Hotel nº ' + Number(i + 1);
            result += arrayHoteles[i].getDescipcion();
            result += 'Costo: ' + arrayHoteles[i].calcularManteniment() + " €<br>";
        }
    }
    if (result == '') result = "Hotel " + nombre + " <b>NO existe</b>";
    divResultado2.innerHTML = result;
}


function donarDeBaixaHotel() {
    let nombre = prompt('Nombre a BORRAR: ');
    let result = '';
    let borrado = false;
    for (i = 0; i < arrayHoteles.length; i++) {
        if (arrayHoteles[i].getNombre == nombre) {
            arrayHoteles.splice(i, 1);
            borrado = true;
        }
    }

    if (borrado) {
        result += `Borrado el Hotel ${nombre} dentro del array arrayHoteles[]`;
    } else {
        result += `Hotel ${nombre} NO existe `;
    }
    divResultado2.innerHTML = result;
    muestraBotones();
}


function muestraBotones() {
    let result = '';
    if (!arrayHoteles) return;
    for (i = 0; i < arrayHoteles.length; i++) {
        result += `<button onclick="veureHotel('${arrayHoteles[i].getNombre}')">Ver Hotel ${arrayHoteles[i].getNombre}</button><br>`;
    }
    divResultado1.innerHTML = result;
}


function todosLosDatos() {
    let result = '';
    //   if (!arrayHoteles) return;
    for (hotel of arrayHoteles) {
        result += hotel.getDescipcion();
        result += 'Costo: ' + hotel.calcularManteniment() + " €<br>";
    }
    divResultado2.innerHTML = result;
}

function modifHotel() {
    let nombre = prompt('Hotel a modificar: ');
    let nombreHotel = '';
    let result = "";
    let modif = false;
    for (i = 0; i < arrayHoteles.length; i++) {
        nombreHotel = arrayHoteles[i].getNombre;
        if (nombreHotel == nombre) {
            updateHotel(nombreHotel)
            modif = true;
        }
    }

    if (modif) {
        result += `El Hotel ${nombre} se ha modificado`;
    } else {
        result += `Hotel ${nombre} NO existe `;
    }
    divResultado2.innerHTML = result;    
    veureHotel(nombreHotel);
}

function updateHotel(nombre) {
    let hotelData = {
        habitaciones: prompt('habitaciones: '),
        plantas: prompt('plantas: '),
        superficie: prompt('superficie: ')
    }
    for (hotel of arrayHoteles) {
        if (hotel.getNombre == nombre) {
            hotel.setHabitaciones = hotelData.habitaciones;
            hotel.setPlantas = hotelData.plantas;
            hotel.setSuperficie = hotelData.superficie;
        }
    }
}