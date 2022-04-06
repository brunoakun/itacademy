//Classe Estudiante
//Atributs: nom, edad, email, carrera

class Estudiante extends Usuari {

    constructor(nom, edad, email, carrera) {
        super(nom, edad, email);    // Hereda de la clase superior
        this._carrera = carrera;    // Solo defino la nueva propiedad carrera
    }


    //GETTERS i SETTERS

    get carrera() { return this._carrera; }
    set carrera(carrera) { return this._carrera = carrera; }


    // MÈTODES DE LA CLASSE
    
    mostrarInfo() {
        return `
            Nombre: ${this._nom} 
            Edat: ${this._edad} 
            Email: ${this._email}
            Carrera: ${this._carrera}
        `;
    }
    
}




//INSTANCIAR

let estudiante1 = new Estudiante('Bruno', 48, 'email@email.com', 'Astronauta');
console.log(`estudiante1 creat es diu ${estudiante1._nom} i té ${estudiante1._edad} anys`);
console.log(estudiante1);
console.log(estudiante1.mostrarInfo());

estudiante1.edad = 55;
console.log(estudiante1);

