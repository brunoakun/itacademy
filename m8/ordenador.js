class Ordenador {
    // Atributos de la clase Ordenador
    constructor(marca, modelo, cpu, ram, hd="HD por defecto") {
        this._marca = marca;
        this._modelo = modelo;
        this._cpu = cpu;
        this._ram = ram;
        this._hd = hd;
    }

    // Getters y setters
    /*
    get marca() {
        return this._marca;
    }
    */
    get modelo() {
        return this._modelo;
    }
    get cpu() {
        return this._cpu;
    }
/*
    set marca(marca) {
        this._marca = marca;
    }
    */
    set modelo(modelo) {
        this._modelo = modelo;
    }
    set cpu(cpu) {
        this._cpu = cpu;
    }

    // Métodos de la clase Ordenador
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