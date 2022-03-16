const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, currentSpecie) => {
      const objOfSpecies = acc;
      if (!objOfSpecies[currentSpecie.name]) {
        objOfSpecies[currentSpecie.name] = 0;
      }
      objOfSpecies[currentSpecie.name] = currentSpecie.residents.length;
      return objOfSpecies;
    }, {});
  }
  // return species.find(() => {}, 0);
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
