//Aquesta versió té el codi de cerca optimitzat a una funció

const HOTELS = [];

// Dades de prova
const hotel1 = new Hotel("Ritz", 300, 3, 3000);
const hotel2 = new Hotel("NH", 150, 2, 1500);
const hotel3 = new Hotel("Mandarín", 500, 5, 5000);
const hotel4 = new Hotel("Sir Victor", 600, 6, 6500);



HOTELS.push(hotel1);
HOTELS.push(hotel2);
HOTELS.push(hotel3);
HOTELS.push(hotel4);

// console.log(hotel2.toString());
// console.log(HOTELS);
// crearHotel();
// mostrarHoteles();
// bajaHotel();
modificarHotel();

function crearHotel(){
    //1.- Comprovar si l'hotel ja existeix
    let nuevoNombre = prompt('Nombre del hotel: ');
    //2.- Si no existeix, pregunta dades de l'hotel.active
    let encontrado = verificarHotel(nuevoNombre);

    // console.log(`encontrado: ${validar} y indice ${indice}`);
    //3.- Registra l'hotel
    // QUAN S'HA DE CREAR EL NOU HOTEL
    if (!encontrado) {//FALSE
        let habitaciones = parseInt(prompt('Habitaciones del hotel: '));
        let plantas = parseInt(prompt('Plantas del hotel: '));
        let superficie = parseInt(prompt('Superficie del hotel (m^2): '));

        let nuevoHotel = new Hotel(nuevoNombre,habitaciones,plantas,superficie);
        HOTELS.push(nuevoHotel);
    } else {
        alert('El hotel ya está registrado anteriormente');
    }

    mostrarHoteles();
  


}

function bajaHotel(){

    // 1.- Demana nom hotel
    let nuevoNombre = prompt('Nombre del hotel: ');
    // 2.- Comprovar si existeix
    let encontrado = verificarHotel(nuevoNombre);
     // recupera l'index per continuar amb el bucle.
   let i = encontrado.index;
    // BUSCAMOS COINCIDENCIAS DE NOMBRE
   
    if (encontrado){
           
    // 3.- Si existeix, esborrar instància de l'array.
            HOTELS.splice(i,1);
            alert("El hotel se ha eliminado");
    
    }else{
        alert ('El hotel no se ha encontrado');
    }
    mostrarHoteles();
   
}

function modificarHotel(){

    //1.- Indicar nombre del hotel
    let nuevoNombre = prompt('Nombre del hotel: ');
    // 2.- Buscar si el hotel existe
    let encontrado = verificarHotel(nuevoNombre);
    // recupera l'index per continuar amb el bucle.
    let i = encontrado.index;
    if (encontrado){   // BUSCAMOS COINCIDENCIAS DE NOMBRE
        opcion = prompt (`Escoge propiedad: 
                             1.- Habitaciones
                             2.- Plantas
                             3.-Superficie`)   ;
        nuevoValor = parseInt(prompt('Introduce nuevo valor'));
        switch(opcion){
            case "1":
                HOTELS[i].setHabitaciones = nuevoValor;
                break;
            case "2":
                HOTELS[i].setPlantas = nuevoValor;
                break;
            case "3":
                HOTELS[i].setSuperficie = nuevoValor;
                break;
        }    
       //  HOTELS[i].setHabitaciones = 24534;
        }
        mostrarHoteles();
    }
   
   


function mostrarHoteles(){

    // const TAMANY_ARRAY = HOTELS.length;
    // for(i=0;i<TAMANY_ARRAY;i++){
    //     console.log(HOTELS[i].toString());
    //     console.log(HOTELS[i].calcularMantenimiento());
    // }

    for (let hotel of HOTELS){
        console.log(hotel.toString());
        console.log(hotel.calcularMantenimiento());
    }
  

}

function verificarHotel(n) {
    //1.- Comprovar si l'hotel ja existeix
    //2.- Si no existeix, pregunta dades de l'hotel.active
    let encontrado = false;
    let i = 0;
    // BUSCAMOS COINCIDENCIAS DE NOMBRE
    while (i < HOTELS.length && !encontrado) {
      // TRUE && FALSE -> FALSE
      if (HOTELS[i].getNombre.toUpperCase() === n.toUpperCase()) {
        encontrado = true;
      }
      i++;
      
    }
    return {
        'encontrado': encontrado,
        'index': i-1
      };
  }
  