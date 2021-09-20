const data = require('../data/zoo_data');

const result = [];

function callback(a, b) {
  if (a.age > b.age) {
    return -1;
  }
  if (a.age < b.age) {
    return 1;
  }

  return 0;
}

function getOldestFromFirstSpecies(id) {
  data.employees.forEach((element) => {
    if (element.id === id) {
      data.species.forEach((animal) => {
        if (animal.id === element.responsibleFor[0]) {
          result.push(animal.residents.sort(callback)[0].name);
          result.push(animal.residents.sort(callback)[0].sex);
          result.push(animal.residents.sort(callback)[0].age);
        }
      });
    }
  });
  return result;
}

module.exports = getOldestFromFirstSpecies;
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
