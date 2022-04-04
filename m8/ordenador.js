class Ordenador {
    // atributos de la clase Ordenador
    constructor(marca, modelo, cpu, ram, hd) {
        this.marca = marca;
        this.modelo = modelo;
        this.cpu = cpu;
        this.ram = ram;
        this.hd = hd;
    }

    // Métodos de la clase Ordenador
    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getCpu() {
        return this.cpu;
    }
    getNombre(nombre) {
        return ("En aquests moments s'està executant: " + nombre);
    }

    getDescipcion() {
        let resultado = "<ul>";
        resultado += '<li> marca:' + this.marca + "</li>";
        resultado += '<li> modelo:' + this.modelo + "</li>";
        resultado += '<li> cpu:' + this.cpu + "</li>";
        resultado += '<li> ram:' + this.ram + "</li>";
        resultado += '<li> hd:' + this.hd + "</li>";
        resultado += '</ul>';
        return (resultado);
    }

}