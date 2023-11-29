// CICLI
// I cicli sono una struttura fondamentale nel mondo dello sviluppo software.
// Un ciclo è una struttura in grado di ri-eseguire un blocco di istruzioni
// un numero prefissato (o non prefissato) di volte.

// Il ciclo WHILE rappresenta uno dei più famosi cicli che ri-eseguono un blocco
// di istruzioni un numero NON PRECISATO di volte.

let count = 5 // dopo diventa 10

while (count < 10) {
  // questo è un ciclo infinito, perchè count sarà SEMPRE minore di 10!
  // e quindi di fatto la condizione sarà sempre vera!
  //   console.log('count è minore di 10, infatti vale', count)
  count = count + 1 // aumento count di 1 ad ogni esecuzione del ciclo
  // si può fare lo stesso incremento anche con:
  // count++
}

// quando la condizione del while diventa FALSE, il while finisce!
// e ora l'esecuzione del codice prosegue!

// console.log('FINITO! count ora vale', count)

// ---ATTENZIONE---
// i cicli while hanno una problematica intrinsica: se lasciati a loro stessi, potenzialmente
// diventano INFINITI! è necessario, nel blocco di istruzioni, inserire della logica affinchè
// prima o poi la condizione verificata diventa FALSE

// ora facciamo un esempio di un ciclo while in cui NON CONOSCIAMO a prescindere
// quante volte verrà eseguito...

let currentValue = 0
let counter = 0

while (currentValue < 5) {
  let increment = Math.random() // genera un numero "pseudo-casuale" tra 0 e 1 es. 0.0000001 - 0.99999999
  console.log(
    'a questa esecuzione del ciclo while, increment è',
    increment,
    'e currentValue finora è',
    currentValue
  )
  currentValue = currentValue + increment // currentValue += increment
  counter = counter + 1
}

console.log(
  'FINITO! currentValue vale',
  currentValue,
  'ci abbiamo messo',
  counter,
  'esecuzioni del ciclo'
)

// -----------------

// come funziona Math.random()? genera un numero ""casuale"" tra 0 e 1 con un sacco di cifre decimali
// vediamo come è possibile utilizzare Math.random() in congiunzione con Math.floor() per generare
// numeri INTERI in un determinato intervallo
console.log(Math.floor(Math.random() * 10)) // genera un numero tra 0 e 9
console.log(Math.floor(Math.random() * 11)) // genera un numero tra 0 e 10
console.log(Math.floor(Math.random() * 101)) // genera un numero tra 0 e 100

console.log('DADO DA 6', Math.ceil(Math.random() * 6)) // genera un numero tra 1 e 6
// 0.00000010 -> 1
// 5.9999999 -> 6

let x = 5.67
console.log(Math.floor(x)) // arrotondato per difetto
console.log(Math.ceil(x)) // arrotondato per eccesso
