$(document).ready(function(){

   /*
    REALIZZO IL MEMORY UN SEMPLICE GIOCO  DI MEMORIA !! 
    IL COMPUTER GENERA CASUALMENTE 5 NUMERI !  CHE POI MOSTRERA' PER 30 SECONDI ! (O IN BASE AI LIVELLI )
    AL TERMINE DEI 30 SECONDI I NUMERI SCOMPARIRANNO  ED APPARIRA' UN PROMT CON LA QUALE L'UTENTE INSERIRA' I NUMERI CHE SI SPERA RICPRDERA'
    (NEL MIO CASO PERDEREI SICURAMENTESE NON USASSI L'INSPECTOR)
    SE L'UTENTE RICORDERA' TUTTI I NUMERI ALLORA DECRETEREMO LA VITTORIA IN CASO CONTRARIO LA SCONFITTA INDICANDO SE E QUANTI NUMERI HA RICORDATO !!

    PARTE DI JS CON INDERIMENTI IN JQUERY
   */

   //  accordio gioco ! impostiamo il click sul pulsante info per mostrare le istruzioni con un toggleClass()

var bottone = $('#info')
bottone.click(function(){

   $('p').slideToggle()
})
// fine accordio





// impostiamo un do while per essere sicuri che si inserisca solo facile medio difficile
do {
   var livello = prompt('decidi tu il tuo livello  facile medio difficile')

} while (livello!='facile'&&livello!='medio'&&livello!='difficile');

// fine dowhile per controllare l'inserimento del livello

// -----------------------------------------------------------------

// creiamo una funzione e generiamo i numeri da ricordare

function getRandomNumber (min, max){
   return Math.floor(Math.random()*(max - min +1)+min)
}

// ora tramite ciclo 4 (perchè so le volte che devo ciclare) origineremo 5 numeri univoci e li inseiremo in un array

var pc =[]
var utente =[]
var numeriRicordati=[]

for(let i = 0; i < 5 ; i++){

   var numeriPc = getRandomNumber(1,99)

   if(!pc.includes(numeriPc)){

      pc.push(numeriPc)
   }
   document.getElementById('numeriPc').innerHTML +='/'+ " " +pc[i]
}
console.log(pc);



// generiamo vari livelli di difficolta con un switch case

var secondi

switch (livello) {
   case 'facile':secondi = 30
      alert('i tuoi numeri rimarranno visibili per 30 secondi')
      break;
  
   case 'medio':secondi = 15
      alert('i tuoi numeri rimarranno visibili per 15 secondi')
      break;
   
   case'difficile':secondi = 5
      alert('i tuoi numeri rimarranno visibili per 5 secondi')
   default:
      break;
}
// fine switch case

// impostiamo  il setIntervall per il contatore dei secondi 

var  livello  
var myIntervall

myIntervall = setInterval(() => {


   document.getElementById('secondi').innerHTML=secondi
   if(secondi == 0){

     document.getElementById('secondi').innerHTML= 'end'

     $('#numeriPc').text('Tempo esaurito')
     
      //inseriamo un ciclo for per gestire i 5 prompt che l'utente utilizzerà per i numeri da inserire 

      for(var i = 0; i < 5 ; i++){

         do {
            var numeroUtente = Number(prompt('inserisci il tuo numero'))
                   
         } while (numeroUtente <1 || numeroUtente >= 100 ||isNaN(numeroUtente));

      
           
          if(!utente.includes(numeroUtente)){
                utente.push(numeroUtente)
             }
            }

           console.log(utente);
    
      for(var i = 0; i < utente.length; i++){

         if(pc.includes(utente[i])){

            numeriRicordati.push(pc[i])
         }
      }
     
      console.log(numeriRicordati);

      if(numeriRicordati.length==pc.length){
         $('#livello').text('HAI SCELTO IL LIVELLO :'+ livello)
         $('#risultato').text('COMPLIMENTI HAI VINTO')
         $('#numeriRicordati').text(`hai ricordato ${numeriRicordati.length} numeri , e sono : ${numeriRicordati} `)
         
      } else {
      
         $('.risultato > h1').text(' ')
         $('#livello').text('HAI SCELTO IL LIVELLO :'+ livello)
         $('#risultato').text('MI SPIACE , HAI PERSO!  MI SA CHE LA MEMORIA NON E\' IL TUO FORTE')
         $('#numeriRicordati').text(`hai ricordato ${numeriRicordati.length} numeri , e sono : ${numeriRicordati} `)


        
      }
   
      clearInterval(myIntervall)

   } else{

      secondi--


   }




}, 1000);





















})