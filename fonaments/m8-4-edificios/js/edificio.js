class Edificio {

    // PROPIEDADES
    constructor(nombre, plantas, superficie, tipo) {
        this._nombre = nombre;
        this._plantas = plantas;
        this._superficie = superficie;
        this._tipo = tipo;
    }

    //GETTERS & SETTERS

    get nombre() { return this._nombre; }
    get plantas() { return this._plantas; }
    get superficie() { return this._superficie; }
    get tipo() { return this._tipo; }

    set tipo(tipo) { this._tipo = tipo; }
    set superficie(superficie) { this._superficie = superficie; }
    set plantas(plantas) { this._plantas = plantas; }
    set nombre(nombre) { this._nombre = nombre; }

    // METODOS

    netejar() {
        // un minut per cada 5 m² + 0.5 minutos por planta
        // Cada minuto de limpieza equivale a 1€
        let minutosDeLimpieza = 0;
        minutosDeLimpieza = parseFloat(this.superficie / 5) + parseFloat(this.plantas / 0.5);

        /*
        let hours = Math.floor(min / 60),
            minuts = min % 60,
            monthlyCost = min * 30;
        */

        return (minutosDeLimpieza * 30);
    }

    mostrarDatos() {

    }

    costeVigilancia() {
        // cada vigilant d’hotel u hospital pot vigilar 1000 m². 
        // els vigilants dels cinemes poden vigilar 3000 m².
        // Contractar cada vigilant costa als propietaris de l’edifici 1.300 euros mensuals, 
        // però els vigilants d’hotels cobren un plus de perillositat de 500 euros mensuals.
        let vigilantes = 0;
        let coste = 0;
        if (this.tipo == 'hospital' || this.tipo == 'hotel') {
            vigilantes = Math.ceil(this.superficie / 1000);
        }
        if (this.tipo == 'cine') {
            vigilantes = Math.ceil(this.superficie / 3000);
        }

        if (vigilantes < 1) vigilantes = 1;
        coste = vigilantes * 1300;
        if (this.tipo == 'hotel') coste += 500;

        return {
            'tipo': this.tipo,
            'vigilantes': vigilantes,
            'coste': coste
        }

    }

}
