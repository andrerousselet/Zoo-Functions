const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // Busca o funcionário de acordo com id passado
  const worker = employees.find((employee) => id === employee.id);
  // Busca primeiro animal de responsabilidade do funcionário achado anteriormente
  const animal = species.find((specie) => specie.id === worker.responsibleFor[0]);
  // Usa método sort() nos residents do animal para organizar por idade decrescente (mais velho na posição [0])
  const sorted = animal.residents.sort((a, b) => b.age - a.age);
  return Object.values(sorted[0]);
}

module.exports = getOldestFromFirstSpecies;
