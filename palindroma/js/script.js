// creare funzione che possa comprendere se la parola inserita dall'utente sia palindroma
// es. parola inserita va divisa in unità (come array) e verificare se il suo inverso è lo stesso
function verifyInvertedWord(wordAnalized) {

    // tramite ciclo andare a prendere la versione inversa dalla parola
    let inverted = '';

    for (let i = wordAnalized.length - 1; i >= 0; i--) {

        inverted += wordAnalized[i];
        console.log(inverted);
        
    }

    // verificare l'uguaglianza tra la parola inserita ed il suo inverso
    if (wordAnalized === inverted) {
        console.log('la parola è palindroma');
    } else {
        console.log('la parola non è palindroma');
    }

    return inverted;
    
}

// chiedere all'utente la parola e verificare uguaglianza tra la forma originale ed invertita
const wordRequested = prompt('inserisci una parola');

let risultato = verifyInvertedWord(wordRequested);


