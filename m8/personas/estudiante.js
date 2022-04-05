//Classe Estudiante
//Atributs: nom, edad, email, carrera

class Estudiante {

    constructor(nom, edad, email, carrera) {
        this._nom = nom;
        this._edad = edad;
        this._email = email;
        this._carrera = carrera;
    }


    //GETTERS i SETTERS

    get nom() { return this._nom; }
    get edad() { return this._edad; }
    get email() { return this._email; }
    get carrera() { return this._carrera; }

    set nom(nom) { return this._nom = nom; }
    set edad(edad) { return this._edad = edad; }
    set email(email) { return this._email = email; }
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

let estudiante1 = new Estudiante('Bruno', 48, 'email@email.com','Astronauta');
console.log(`estudiante1 creat es diu ${estudiante1._nom} i té ${estudiante1._edad} anys`);
console.log(estudiante1);
console.log(estudiante1.mostrarInfo());

estudiante1.edad=55;
console.log(estudiante1);

