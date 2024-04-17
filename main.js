const kmJourney = prompt("Inserisci i chilometri da percorrere");
const ageUser = prompt("Inserisci la tua età");
console.log(kmJourney, ageUser);

const priceKm = 0.21

const priceJourney = kmJourney * priceKm;
console.log(priceJourney);

let discountJunior = ""; 
let discountOver = "";
let reducedPrice = ""; 

if(ageUser < 18) {
    discountJunior = 0.02;
    reducedPrice = priceJourney - discountJunior; 
    reducedPrice = reducedPrice.toFixed(2); 
    console.log(reducedPrice);
    document.getElementById('price').innerHTML = "Avete ricevuto uno sconto del 20%. Il costo del biglietto sarà " + reducedPrice + "€";
} else if (ageUser > 65) {
    discountOver = 0.4;
    reducedPrice = priceJourney - discountOver;
    reducedPrice = reducedPrice.toFixed(2); 
    console.log(reducedPrice);
    document.getElementById('price').innerHTML = "Avete ricevuto uno sconto del 40%. Il costo del biglietto sarà " + reducedPrice + "€";
} else {
    fullPrice = "Non è previsto nessuno sconto";
    console.log(priceJourney);
    document.getElementById('price').innerHTML = "Non è previsto nessuno sconto. Il costo del biglietto è " + priceJourney + "€";
}
