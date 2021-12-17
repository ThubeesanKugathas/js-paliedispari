// creare una funzione che randomizza un numero per la macchina da 1 a 5
function randomNumber (min, max) {
    const result = Math.floor(Math.random() * ((max + 1) - min)) + min; 
    return result;
}

const machineNumber = randomNumber(1, 5);

// creare una funzione che verifichi la somma del numero scelto dall'utente e dal randomizer
// della macchina sia pari o dispari
function isPari(num) {

    // if (num % 2 === 0) {
    //     return true;
    // } else {
    //     return false;
    // }

    // if (num % 2 === 0) {
    //     return true;
    // } 

    // return false;

    return num % 2 === 0;

}


// chiedere all'utente se vuole proporre pari o dispari
const question = prompt('Pari o Dispari?');

// chiedere all'utente un numero da 1 a 5
const humanNumber = parseInt(prompt('Inserisci un numero da 1 a 5'));

// a seconda della scelta dell'utente e del risultato somma dei due numeri, decretare il vincitore
const sum = humanNumber + machineNumber;
console.log(sum);

if ((isPari(sum) && question === 'pari') || (!isPari(sum) && question === 'dispari')) {
    console.log('hai vinto');
} else {
    console.log('hai perso');
}