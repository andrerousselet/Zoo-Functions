const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  // Se animal não for definido, cria objeto com reduce, adicionando a cada iteração,
  // o nome da specie (currentValue) como chave e a quantidade de residents como respectivo valor.
  if (animal === undefined) {
    return species.reduce((acc, currentSpecie) => { // com o nome acc, não tem problema, mas com qualquer outro nome, o linter acusa erro...por que???
      acc[currentSpecie.name] = currentSpecie.residents.length;
      return acc;
    }, {});
  }
  // Cria constante com os residents de cada specie que tiver o mesmo nome do parâmetro. Depois,
  // verfica se o parâmetro possui a chave sex: se tiver, filtra e retorna a quantidade, se não,
  // retorna apenas a quantidade de residentes.
  const residentsOfSpecie = species.find((specie) => specie.name === animal.specie).residents;
  if (Object.keys(animal).includes('sex')) {
    return residentsOfSpecie.filter((resident) => resident.sex === animal.sex).length;
  }
  return residentsOfSpecie.length;
}

module.exports = countAnimals;
