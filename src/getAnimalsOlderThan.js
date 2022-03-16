const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const anml = species.find((specie) => specie.name === animal);
  return anml.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
