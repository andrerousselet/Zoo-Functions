const data = require('../data/zoo_data');

const { species } = data;
// console.log(species);

function getSpeciesByIds(...ids) {
  // if (ids.length === 0) {
  //   return [];
  // }
  // Usa map para iterar sobre os parâmetros e compara cada um, se houver,
  // com specie.id, retornando o(s) objeto(s) encontrado(s) com find.
  // Caso não haja parâmetro, o map retorna um array vazio.
  return ids.map((id) => species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
