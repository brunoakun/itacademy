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
        let resultado = "";
        resultado += ' marca:' + this.marca + "<br>";
        resultado += ' modelo:' + this.modelo + "<br>";
        resultado += ' cpu:' + this.cpu + "<br>";
        resultado += ' ram:' + this.ram + "<br>";
        resultado += ' hd:' + this.hd
        return (resultado);
    }

}