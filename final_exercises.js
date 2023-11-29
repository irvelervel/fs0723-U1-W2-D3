// ESERCIZI :)

// un array di oggetti!
const arrayOfPets = [
  {
    name: 'Fufy',
    species: 'cat',
    age: 5,
    furColor: 'white',
    numberOfLegs: 4,
    skills: ['meowing', 'asking-for-food', 'purring', 'sleeping'],
  },
  {
    name: 'Doggo',
    species: 'dog',
    age: 1,
    furColor: 'gold',
    numberOfLegs: 4,
    skills: ['barking', 'playing', 'tail-wiggling'],
  },
  {
    name: 'Poppy',
    species: 'parrot',
    age: 6,
    furColor: 'green',
    numberOfLegs: 2,
    skills: ['sleeping', 'flying', 'speaking', 'twitting'],
  },
]

// voglio stampare in console tutte le specie degli animali nell'arrayOfPets
// risultato:
// cat
// dog
// parrot

for (let i = 0; i < arrayOfPets.length; i++) {
  console.log(arrayOfPets[i].species)
}

// cat
// dog
// parrot

for (let i = 0; i < arrayOfPets.length; i++) {
  console.log(
    'Il pet si chiama ' +
      arrayOfPets[i].name +
      ', è un ' +
      arrayOfPets[i].species
  )
}

// proviamo, per ogni animale, a salvare la sua prima skill in un array a parte
// risultato: ['meowing', 'barking', 'sleeping']
const firstSkillArray = [] // lo creo in memoria ma all'inizio è vuoto! lo devo riempire
// utilizzando un ciclo

for (let i = 0; i < arrayOfPets.length; i++) {
  const firstSkill = arrayOfPets[i].skills[0] // questa è la prima skill del pet corrente
  firstSkillArray.push(firstSkill) // pusho nell'array questa prima skill
}

console.log('firstSkillArray', firstSkillArray)

// ...ma se io volessi pushare in un array l'ULTIMA skill di ogni animale?
const lastSkillArray = []

for (let i = 0; i < arrayOfPets.length; i++) {
  const lastSkill = arrayOfPets[i].skills[arrayOfPets[i].skills.length - 1]
  // arrayOfPets[i].skills.length - 1 --> 3 per il gatto e per il pappagallo
  // arrayOfPets[i].skills.length - 1 --> 2 per il cane
  lastSkillArray.push(lastSkill)
}

console.log('lastSkillArray', lastSkillArray)

// calcoliamo il numero totale di gambe dei pets
// come sempre, mi salvo il totale parziale delle gambe FUORI dal for

let totalNumberOfLegs = 0

for (let i = 0; i < arrayOfPets.length; i++) {
  totalNumberOfLegs = totalNumberOfLegs + arrayOfPets[i].numberOfLegs // è 4 per il cane e il gatto, è 2 per il pappagallo
}

console.log('IL TOTALE DELLE GAMBE È', totalNumberOfLegs)
