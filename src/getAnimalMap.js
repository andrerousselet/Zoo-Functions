const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function noParam() {
  return species.reduce((acc, currSpecie) => {
    if (!acc[currSpecie.location]) acc[currSpecie.location] = [];
    const animal = species.find((specie) => specie.name === currSpecie.name);
    acc[currSpecie.location].push(animal.name);
    return acc;
  }, {});
}

function includesNameTrue(options) {
  return species.reduce((acc, currSpecie) => {
    if (!acc[currSpecie.location]) acc[currSpecie.location] = [];
    const animal = species.find((specie) => specie.name === currSpecie.name);
    const residentsNames = animal.residents.map((resident) => resident.name);
    if (options.sorted) residentsNames.sort();
    const obj = { [animal.name]: residentsNames };
    acc[currSpecie.location].push(obj);
    return acc;
  }, {});
}

// function sortedTrue() {
//   return species.reduce((acc, currSpecie) => {
//     if (!acc[currSpecie.location]) acc[currSpecie.location] = [];
//     const animal = species.find((specie) => specie.name === currSpecie.name);
//     const residentsNames = animal.residents.map((resident) => resident.name).sort();
//     const obj = { [animal.name]: residentsNames };
//     acc[currSpecie.location].push(obj);
//     return acc;
//   }, {});
// }

function sexFilter(options) {
  return species.reduce((acc, currSpecie) => {
    if (!acc[currSpecie.location]) acc[currSpecie.location] = [];
    const animal = species.find((specie) => specie.name === currSpecie.name);
    const residentsNames = animal.residents
      .filter((resident) => resident.sex === options.sex)
      .map((element) => element.name);
    if (options.sorted) residentsNames.sort();
    const obj = { [animal.name]: residentsNames };
    acc[currSpecie.location].push(obj);
    return acc;
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noParam();
  if (options.sex) return sexFilter(options);
  return includesNameTrue(options);
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
