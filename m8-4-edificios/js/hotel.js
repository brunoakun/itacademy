

class Hotel extends Edificio {

    // PROPIEDADES
    constructor(nombre, plantas, superficie, habitaciones, tipo = "hotel") {
        // Hereda de la clase superior
        super(nombre, plantas, superficie, tipo);
        this._habitaciones = habitaciones;
    }

    // GETTERS & SETTERS
    get habitaciones() { return this._habitaciones; }
    set habitaciones(habitaciones) { this._habitaciones = habitaciones; }

    // METODOS
    infoHotel() {
        /**
         * En els hotels cada dia passa el servei d’habitacions. Es calcula que cada membre del servei pot atendre 20 habitacions. 
         * Es crearà un mètode que calculi, i mostri per pantalla: 
         * a) Quantes persones són necessàries per atendre el servei d’habitacions l’hotel. 
         * b) Quin és el total necessari pels sous d’aquestes persones, tenint en compte que cada persona cobra 1.000 euros al mes. 
         * 
         * Exemples:
         *   L’”Hotel Hilton”, de 73.858 m² i 22 plantes. Té 583 habitacions.
         */
         
        return (`El Hotel ${this.nombre}, de ${this.superficie} m² i ${this.plantas} plantes. Té ${this.habitaciones} habitacions.`);
    }
}