const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  // Usa obj property shorthand para retornar um objeto com as contantes criadas acima
  return { child, adult, senior };
}

function calculateEntry(entrants) {
  const { prices } = data;
  // Verifica se parâmetro foi passado ou se foi passado objeto vazio (sem propriedades...)
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  // Transforma retorno da função countEntrants em um array para poder trabalhar com reduce
  const actualEntrants = Object.entries(countEntrants(entrants));
  // Aplica reduce para somar o total do valor de cada elemento do array (curr[1])
  // multiplicado pelo valor da respectiva chaver do objeto prices
  return actualEntrants.reduce((acc, curr) => acc + (curr[1] * prices[curr[0]]), 0);
}

module.exports = { calculateEntry, countEntrants };
