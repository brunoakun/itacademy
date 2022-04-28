class Treballador {

    
    // PROPIEDADES

    constructor(nom, cognom, carrec, disponibilitatTrasllat) {
        this._nom = nom;
        this._cognom = cognom;
        this._carrec = carrec;
        this._disponibilitatTrasllat = disponibilitatTrasllat;
    }


    //GETTERS & SETTERS

    get nom() { return this._nom; }
    get cognom() { return this._cognom; }
    get carrec() { return this._carrec; }
    get disponibilitatTrasllat() { return this._disponibilitatTrasllat; }

    set nom(val) { this._nom = val; }
    set cognom(val) { this._cognom = val; }
    set carrec(val) { this._carrec = val; }
    set disponibilitatTrasllat(val) { this._disponibilitatTrasllat = val; }


    // METODOS

}