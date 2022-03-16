const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  return species.reduce((acc, currSpecie) => {
    if (!acc[currSpecie.location]) {
      acc[currSpecie.location] = [];
    }
    const animal = species.find((specie) => specie.name === currSpecie.name).name;
    acc[currSpecie.location].push(animal);
    return acc;
  }, {});
}

console.log(getAnimalMap());
module.exports = getAnimalMap;
