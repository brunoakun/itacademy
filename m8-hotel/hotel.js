class Hotel {

    // ATRIBUTOS de la clase hotel
    constructor(nombre, habitaciones, plantas, superficie) {
        this._nombre = nombre;
        this._habitaciones = habitaciones;
        this._plantas = plantas;
        this._superficie = superficie;
    }

    // GETTERS Y SETTERS
    get nombre() { return this._nombre; }
    get habitaciones() { return this._habitaciones; }
    get plantas() { return this._plantas; }
    get superficie() { return this._superficie; }

    set nombre(val) { this._nombre = val; }
    set habitaciones(val) { this._habitaciones = val; }
    set plantas(val) { this._plantas = val; }
    set superficie(val) { this._superficie = val; }


    // METODOS DE LA CLASE 

    getDescipcion() {
        let resultado = "<ul>";
        resultado += '<li> marca: ' + this.marca + "</li>";
        resultado += '<li> modelo: ' + this.modelo + "</li>";
        resultado += '<li> cpu: ' + this.cpu + "</li>";
        resultado += '<li> ram: ' + this.ram + "</li>";
        resultado += '<li> hd: ' + this.hd + "</li>";
        resultado += '</ul>';
        return (resultado);
    }

}