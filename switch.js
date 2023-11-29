// COSTRUTTO SWITCH!
// uno switch non è altro che una "semplificazione" sintattica di un if/else complesso
// "SUGAR COATING" sull'if/else -> "copertura di zucchero" (su una cosa già vista)

// immaginiamo di dover calcolare quante ore di studio sarebbero necessarie
// per passare un esame

const firstName = 'Stefano'
let hoursOfIntenseStudy

if (firstName === 'Stefano') {
  hoursOfIntenseStudy = 40
} else if (firstName === 'Marco') {
  hoursOfIntenseStudy = 30
} else if (firstName === 'Giancarlo') {
  hoursOfIntenseStudy = 20
} else if (firstName === 'Mario') {
  hoursOfIntenseStudy = 0
} else {
  hoursOfIntenseStudy = 40
}

// console.log(
//   'Ti chiami ' +
//     firstName +
//     ' e quindi le ore necessarie per passare il tuo esame saranno ' +
//     hoursOfIntenseStudy
// )

// questa situazione potrebbe venire "semplificata" (scritta più elegantemente)
// con un costrutto switch!

// riscriviamo lo stesso identico codice con un costrutto switch
switch (firstName) {
  case 'Stefano':
    hoursOfIntenseStudy = 40
    break // una volta trovato un "match", usciamo dallo switch

  case 'Marco':
    hoursOfIntenseStudy = 30
    break // una volta trovato un "match", usciamo dallo switch

  case 'Giancarlo':
    hoursOfIntenseStudy = 20
    break // una volta trovato un "match", usciamo dallo switch

  case 'Mario':
    hoursOfIntenseStudy = 0
    break // una volta trovato un "match", usciamo dallo switch

  default: // entrerei qui dentro solamente qualora non mi chiamassi "Stefano",
    // "Marco", "Giancarlo" o "Mario"
    // è OBBLIGATORIO in ogni switch!
    hoursOfIntenseStudy = 40
}

console.log(
  'Ti chiami ' +
    firstName +
    ' e quindi le ore necessarie per passare il tuo esame saranno ' +
    hoursOfIntenseStudy
)
