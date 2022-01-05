const data = require('../data/zoo_data');

function comprataLocation(options) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    const { location, name } = element;
    result[location].push(name);
  });
  return result;
}

function comparaLocationName(options) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    const obj = {};
    const { location, name } = element;
    obj[name] = element.residents;
    result[location].push(obj);
  });
  return result;
}

function comparaLocationNameSorted(options) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    const obj = {};
    const { location, name } = element;
    obj[name] = element.residents.sort(); result[location].push(obj);
  });
  return result;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return comprataLocation(options);
  } if (options.includeNames === true) {
    return comparaLocationName(options);
  } if (options.includeNames === true && options.sorted === true) {
    return comparaLocationNameSorted(options);
  }
}
module.exports = getAnimalMap;
// console.log(getAnimalMap({ includeNames: true }));
