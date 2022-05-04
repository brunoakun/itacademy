//Classe usuari
//Atributs: nom, edad, email
class Usuari {

    // ATRIBUTOS

    constructor(nom, edad, email = 'email@email.com', genero) {
        this._nom = nom;
        this._edad = edad;
        this._email = email;
        this._genero = genero;
    }


    // GETTERS i SETTERS

    get nom() { return this._nom; }
    get edad() { return this._edad; }
    get email() { return this._email; }

    set edad(edad) { this._edad = edad; }
    set nom(nom) { this._nom = nom; }
    set email(email) { this._email = email; }


    // MÈTODES DE LA CLASSE

    incrementarEdad() {
        this._edad++;
    }

    mostrarInfo() {
        return `
            Nombre: ${this._nom} 
            Edat: ${this._edad} 
            Email: ${this._email}
        `;
    }

    mayorDeEdad() {
        let ret = "";
        if (this._edad < 18) ret = "Es Menor de edad";
        if (this._edad >= 18) ret = "Es Mayor de edad";
        return (ret)
    }

}



// INSTANCIAR

let usuari1 = new Usuari('Bruno', 10, 'bruno@email.com');
//console.log(`Usuari1 es diu ${usuari1._nom} i té ${usuari1._edad} anys`);
let usuari2 = new Usuari('Roser', 30);
//console.log(`Usuari2 es diu ${usuari2._nom} i té ${usuari2._edad} anys`);
console.log(usuari1);

// usuari1.canviNom = 'Enric';
usuari1.incrementarEdad();
usuari1.incrementarEdad();
console.log(usuari1);

console.log(usuari1.mostrarInfo());

usuari1._edad = 5;
usuari1._genero = "Hombre";
console.log(usuari1._genero);

