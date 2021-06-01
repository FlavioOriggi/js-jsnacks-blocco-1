// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var invitato = prompt('Inserisci il tuo nome'); 
var invitato = invitato[0].toUpperCase() + invitato.substring(1);

var lista = ['Nick', 'Daisy', 'Myrtle', 'Tom', 'Jay', 'Jordan'];

var corrispondente = false;

for(var i = 0; i < lista.length; i++){       
    if(invitato == lista[i]){
        corrispondente = true;         
    } 
}

if (corrispondente) {
    document.getElementById('som').innerHTML = 'Benvenuto alla festa';
    // console.log('Benvenuto alla festa');
} else {
    document.getElementById('som').innerHTML = 'Non sei nella lista dei partecipanti';
    // console.log('Lei non è nella lista dei partecipanti');
}