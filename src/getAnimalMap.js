const data = require('../data/zoo_data');

function comprataLocation(options) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    switch (element.location) {
    case 'NE': result.NE.push(element.name);
      break;
    case 'NW': result.NW.push(element.name);
      break;
    case 'SE': result.SE.push(element.name);
      break;
    case 'SW': result.SW.push(element.name);
      break;
    default: break;
    }
  });
  return result;
}

function comparaLocationName(options) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    const obj = {};
    switch (element.location) {
    case 'NE': obj[element.name] = element.residents; result.NE.push(obj);
      break;
    case 'NW': obj[element.name] = element.residents; result.NW.push(obj);
      break;
    case 'SE': obj[element.name] = element.residents; result.SE.push(obj);
      break;
    case 'SW': obj[element.name] = element.residents; result.SW.push(obj);
      break;
    default: break;
    }
  });
  return result;
}

function comparaLocationNameSorted(options) {
  const result = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((element) => {
    const obj = {};
    switch (element.location) {
    case 'NE': obj[element.name] = element.residents.sort(); result.NE.push(obj);
      break;
    case 'NW': obj[element.name] = element.residents.sort(); result.NW.push(obj);
      break;
    case 'SE': obj[element.name] = element.residents.sort(); result.SE.push(obj);
      break;
    case 'SW': obj[element.name] = element.residents.sort(); result.SW.push(obj);
      break;
    default: break;
    }
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
