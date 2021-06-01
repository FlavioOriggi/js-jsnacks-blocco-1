// L’utente inserisce due parole in successione, con due prompt. 
// Il software stampa prima la parola più corta, poi la parola più lunga

var primaParola = prompt('inserisci una parola');
var secondaParola = prompt('inserisci un\'altra parola');

var longFirst = primaParola.length;
var longSecond = secondaParola.length;

if (longFirst === longSecond){
    document.getElementById('lista').innerHTML = 'sono uguali' + ' ' + primaParola + ' ' + secondaParola;
} else if(longFirst < longSecond){
    document.getElementById('lista').innerHTML = primaParola + ' ' + secondaParola;;
} else {
    document.getElementById('lista').innerHTML = secondaParola + ' ' + primaParola ;
}