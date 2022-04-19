class Hotel {

    // ATRIBUTOS de la clase hotel
    constructor(nombre, habitaciones, plantas, superficie) {
        this._nombre = nombre;
        this._habitaciones = habitaciones;
        this._plantas = plantas;
        this._superficie = superficie;

        this.SALARIO = 1500;
        this.HAB_EMPLEADO = 20;
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
        resultado += '<li><b> Nombre: ' + this._nombre + "</b></li>";
        resultado += '<li>habitaciones: ' + this._habitaciones + "</li>";
        resultado += '<li>plantas: ' + this._plantas + "</li>";
        resultado += '<li>superficie: ' + this._superficie + "</li>";
        resultado += '</ul>';
        return (resultado);
    }

    calcularManteniment() {
        let costo = (this._habitaciones / this.HAB_EMPLEADO) * this.SALARIO;
        return (costo.toFixed(2));
    }

}