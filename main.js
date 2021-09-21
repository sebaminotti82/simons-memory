$(document).ready(function(){

var regolamentoGioco =$('#game')

regolamentoGioco.click(function(){

    $('p').slideToggle(1000);

})
var start = $('#start')

start.click(function(){
var pc=[]
var utente = []
var ricordati = []

for(var i = 0; i < 5 ; i++){
 var numeriPc = generaNumeri(1,99)
 if(!pc.includes(numeriPc)){
     pc.push(numeriPc)
 }
  document.getElementById('numeriPc').innerHTML+='/'+pc[i]
}
console.log(pc);

//-------------------------------------------------
//-------------------------------------------------

var secondi = 30
var interval 
var numeriUtente
interval = setInterval(() => {
    document.getElementById('secondi').innerHTML = secondi
if(secondi == 0){
     $('#numeriPc').text('NUMERI NASCOSTI')
      document.getElementById('secondi').innerHTML ='... '

setTimeout(() => {
        for(var i = 0; i < 5 ; i++){

          do {
               numeriUtente = Number(prompt('inserisci i numeri che ricordi'))
          } while (numeriUtente < 1 || numeriUtente > 99 || isNaN(numeriUtente) || numeriUtente=='');

        

        if(!utente.includes(numeriUtente)){

            utente.push(numeriUtente)
        }
        
    }


  for(var i= 0; i < utente.length; i++){

        if(pc.includes(utente[i])){
     
            ricordati.push(utente[i])

        }
       
      }
 

if(pc.length==ricordati.length){
    $('#esito').text(`Complimenti ! Che memoria.  Hai ricordato tutti i numeri ${ricordati} `)
    $('#esito').css('color','white')
} else { $('#esito').text(`MMM CI VORRA' UN PO' DI FOSFORO `)
$('#esito').css('color','red')
}

}, 1000);




    
    clearInterval(interval)
} else {

    secondi--
}

}, 1000);











})







})




function generaNumeri(minimo, massimo){

    return Math.floor(Math.random()*(massimo - minimo +1)+minimo)
}