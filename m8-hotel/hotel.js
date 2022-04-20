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
    get getNombre() { return this._nombre; }
    get getHabitaciones() { return this._habitaciones; }
    get getPlantas() { return this._plantas; }
    get getSuperficie() { return this._superficie; }

    set setNombre(val) { this._nombre = val; }
    set setHabitaciones(val) { this._habitaciones = val; }
    set setPlantas(val) { this._plantas = val; }
    set setSuperficie(val) { this._superficie = val; }



    // METODOS DE LA CLASE 

    getDescipcion() {
        let resultado = "<ul>";
        resultado += '<li><b> Nombre: ' + this.getNombre + "</b></li>";
        resultado += '<li>habitaciones: ' + this.getHabitaciones + "</li>";
        resultado += '<li>plantas: ' + this.getPlantas + "</li>";
        resultado += '<li>superficie: ' + this.getSuperficie + "</li>";
        resultado += '</ul>';
        return (resultado);
    }

    calcularManteniment() {
        let costo = (this.getHabitaciones / this.HAB_EMPLEADO) * this.SALARIO;
        return (costo.toFixed(2));
    }

}