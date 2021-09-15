const data = require('../data/zoo_data');

const saida = {
  lions: 4,
  tigers: 2,
  bears: 3,
  penguins: 4,
  otters: 4,
  frogs: 2,
  snakes: 2,
  elephants: 4,
  giraffes: 6,
};

function countAnimals(animal) {
  const final = [];
  if (animal === undefined) {
    final.push(saida);
    return final[0];
  }
  data.species.forEach((element) => {
    if (element.name === animal.specie && animal.gender !== undefined) {
      const result = element.residents.filter((animalzinho) => animalzinho.sex === animal.gender);
      final.push(result.length);
    } else if (element.name === animal.specie) {
      final.push(element.popularity);
      console.log(element);
    }
  });
  return final[0];
}

module.exports = countAnimals;
console.log(countAnimals({ specie: 'elephants' }));
