/**
 *  Pregunta 1:
 * Crea dos arrays anomenats array1 i array2. Crea un bucle que inclogui al mateix temps (a la mateixa volta) 
 * a l'array1 els números del 100 al 5 en intervals de 5, i a l'array2 els múltiples de 3 de la sèrie anterior. 
 * Un cop finalitzat el bucle, ordenar els elements de l'array2 de forma ascendent i mostrar-ne el contingut en els paràgrafs amb l'id equivalent del present .html.
 */
function calculaBule() {

    let resDivArray1 = document.getElementById('array1');
    let resDivArray2 = document.getElementById('array2');

    let ARRAY1 = [];
    let ARRAY2 = [];

    let conta = 100;
    for (i = 0; i < 100; i++) {
        if (conta >= 5) {
            ARRAY1.push(conta);
            if ((ARRAY1[i] % 3) == 0) ARRAY2.push(ARRAY1[i]);
        }
        conta = conta - 5;
    }

    // Invertir ARRAY2
    let arr2Reverse = ARRAY2.slice().reverse();
    console.log(ARRAY1);

    resDivArray1.innerHTML = ARRAY1;
    resDivArray2.innerHTML = arr2Reverse;
}



/**
 *  Pregunta 2b:
 *  Buscar a 'Pep Vila'
 */

function buscaPepVila() {
    for (persona of treballadors) {
        if (persona.nom == 'Pep' && persona.cognom == 'Vila') {
            console.log(persona);

            document.getElementById('nom1').innerHTML = persona.nom;
            document.getElementById('cognoms1').innerHTML = persona.cognom;
            document.getElementById('carrec1').innerHTML = persona.carrec;
            document.getElementById('trasllat1').innerHTML = persona.disponibilitatTrasllat;
        }
    }
}



/**
 *  Pregunta 2c:
 *  Mostrar por cónsola un array de traballadors con disponibilidad = true
 */
function buscaDisponibles() {
    let DISPONIBLES = [];
    for (persona of treballadors) {
        if (persona.disponibilitatTrasllat) DISPONIBLES.push(persona);
    }
    console.log(DISPONIBLES);
}



/**
 * Pregunta 2e:
 * Crea un nou treballador utilitzant la classe acabada de crear. 
 * (directament des de la funció, sense demanar les dades)
 * Mostra els atributs del nou treballador a la llista següent.
 */

function newTreballador() {
    let treballador1 = new Treballador('Joan', 'Lopez', 'Conductor', true);

    document.getElementById('nom2').innerHTML = treballador1.nom;
    document.getElementById('cognoms2').innerHTML = treballador1.cognom;
    document.getElementById('carrec2').innerHTML = treballador1.carrec;
    document.getElementById('trasllat2').innerHTML = treballador1.disponibilitatTrasllat;
}


