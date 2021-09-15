/* eslint-disable sonarjs/cognitive-complexity */
const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = [];
  for (let i = 0; i < species.length; i += 1) {
    if (species[i].name === animal) {
      for (let index = 0; index < species[i].residents.length; index += 1) {
        animals.push(species[i].residents[index].age);
      }
    }
  }
  return animals.every((element) => element >= age);
}
module.exports = getAnimalsOlderThan;
getAnimalsOlderThan('otters', 7);
