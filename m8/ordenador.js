class Ordenador {
    // Atributos de la clase Ordenador
    constructor(marca, modelo, cpu, ram, hd = "HD por defecto") {
        this._marca = marca;
        this._modelo = modelo;
        this._cpu = cpu;
        this._ram = ram;
        this._hd = hd;
    }

    // GETTERS Y SETTERS

    get marca() { return this._marca; }
    get modelo() { return this._modelo; }
    get cpu() { return this._cpu; }
    get ram() { return this._ram; }
    get hd() { return this._hd; }

    set marca(val) { this._marca = val; }
    set modelo(val) { this._modelo = val; }
    set cpu(val) { this._cpu = val; }
    set ram(val) { this._ram = val; }
    set hd(val) { this._hd = val; }

    // ATRIBUTOS DE LA CLASE 

    getNombre(nombre) {
        return ("En aquests moments s'està executant: " + nombre);
    }

    getDescipcion() {
        let resultado = "<ul>";
        resultado += '<li> marca:' + this._marca + "</li>";
        resultado += '<li> modelo:' + this._modelo + "</li>";
        resultado += '<li> cpu:' + this._cpu + "</li>";
        resultado += '<li> ram:' + this._ram + "</li>";
        resultado += '<li> hd:' + this._hd + "</li>";
        resultado += '</ul>';
        return (resultado);
    }

}