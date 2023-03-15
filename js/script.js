// Data una lista della spesa, stampare sulla pagina (anche brutalmente, 
// basta che si vedano) gli elementi della lista individualmente 
// con un ciclo while.
// Rivediamo l’esercizio visto insieme, ma questa volta con il ciclo
// while al posto del ciclo for. Facciamo attenzione a non dimenticare 
// tutte le differenze implementative che il ciclo while ci impone, 
// in particolare alla variabile di indice.


// Creare la lista della spesa
const shopList = ["Pasta", "Formaggio", "Vino", "Carne", "Pane", "Cioccolata", "Uova", "Farina"];
console.log(shopList);

// Seleziono la mia lista nel DOM
const ulList = document.querySelector("ul");
console.log(ulList);

// Creare un ciclo con while
let i = 0;

while (i < shopList.length) {
    console.log(shopList[i]);

    ulList.innerHTML += `<li> ${shopList[i]} </li>`;

    i++;
}
