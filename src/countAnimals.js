const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function countAnimals(animal) {
  return species.reduce((objOfSpecies, currentSpecie) => {
    objOfSpecies[currentSpecie.name] = currentSpecie.residents.length;
    return objOfSpecies;
  }, {});
}
console.log(countAnimals());

module.exports = countAnimals;

// const players = [
//   { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
//   { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
//   { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
//   { fullName: 'Marta Vieira da Silva', email: 'rainhamarta@futebol.br' },
// ];
// const playerObj = players.reduce((accumulator, currentValue) => {
//   accumulator[currentValue.fullName] = currentValue.email;
//   return accumulator;
// }, {});
// console.log(playerObj);
