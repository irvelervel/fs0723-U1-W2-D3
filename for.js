// CICLO FOR
// ...largamente il più utilizzato
// Il ciclo FOR permette di ri-eseguire un blocco di istruzioni un numero
// PREFISSATO di volte!

// SINTASSI
// for(
// 1) inizializzazione di una variabile "contatore" -> es. let i = 0
// 2) CONDIZIONE da verificare per la ri-esecuzione del ciclo -> es. i < 10
// 3) di QUANTO i deve essere incrementato automaticamente alla fine di ogni ciclo -> es. i++
// ){
//  qui inseriamo il blocco di istruzioni da ripetere
// }

for (let i = 0; i < 10; i++) {
  // questo blocco verrà eseguito 10 volte!
  // i parte da 0 alla prima esecuzione del ciclo
  // poi incrementa di 1 e diventa quindi 1, poi 2, poi 3 etc.
  // fino a che i sarà pari a 9, e il ciclo verrà eseguito un'ultima volta
  console.log('i vale', i)
  // quando i diventa 10 si esce dal ciclo
}

// ciclo finito
// l'incremento di i, quindi la sezione i++, viene eseguita AL TERMINE del ciclo

// i cicli FOR sono P E R F E T T I per esplorare gli array!

const names = ['alex', 'jurgen', 'luca', 'paolo', 'rachele'] // 5 nomi

// lunghezza di names? 5
// indici validi per gli elementi di names? 0, 1, 2, 3, 4
// ultima posizione valida dell'array names è 4 -> names[4] -> rachele, names[5] -> undefined

console.log('LA LUNGHEZZA DI NAMES È', names.length)

// facciamo un ciclo for per esplorare tutti gli elementi di names...
for (let i = 0; i < names.length; i++) {
  // un ciclo che viene eseguito CINQUE volte, perchè names.length è 5
  // i potrà essere 0, 1, 2, 3, 4
  console.log(names[i])
  // al primo ciclo -> names[0]
  // al secondo ciclo -> names[1]
  // al terzo ciclo -> names[2]
  // al quarto ciclo -> names[3]
  // al quinto ciclo -> names[4]
}
