const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Desestrutura a chave species do objeto data.
  const { species } = data;
  // Cria constante que armazena a especie encontrada caso o parâmetro seja igual ao specie.name.
  const anml = species.find((specie) => specie.name === animal);
  // Acessa a chave residents da const anterior e retorna true se todos
  // os residentes tiverem idade maior que o parâmetro passado.
  return anml.residents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
