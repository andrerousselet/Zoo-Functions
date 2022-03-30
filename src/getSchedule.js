const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');

// Variáveis globais para auxiliar nas buscas e verificações das funções
const animalsArray = species.map((specie) => specie.name);
const daysArray = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// console.log(species);

// Função que cria objeto específico com as condições de segunda-feira.
const mondaySchedule = () => {
  const obj = {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
  return obj;
};

// Função que cria array de animais com disponibilidade de acordo com parâmetro.
const lookForAnimals = (day) => {
  const array = species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
  return array;
};

// Função que cria objeto com as horas de abertura e fechamento (através de template strings),
// e usa função auxilar para gerar array de animais com disponibilidade no dia procurado.
const daysSchedule = (param) => {
  const openingTime = hours[param].open;
  const closingTime = hours[param].close;
  const obj = {
    [param]: {
      officeHour: `Open from ${openingTime}am until ${closingTime}pm`,
      exhibition: lookForAnimals(param),
    },
  };
  return obj;
};

// Função auxiliar que usa variável global animalsArray para verificar (na função principal) se
// o parâmetro buscado está incluso e dar o retorno esperado.
const checkParamIsAnimal = (param) => animalsArray.includes(param);

// Função auxiliar que usa variável global daysArray para verificar (na função principal) se
// o parâmetro buscado está incluso e dar o retorno esperado.
const checkParamIsDay = (param) => daysArray.includes(param);

// Função que cria reproduz o array de availability de acordo com o animal buscado
const animalAvailability = (animal) => species
  .find((specie) => animal === specie.name).availability;

// Função para retornar objeto com todos os dias e animais disponiveis caso getSchedule
// seja chamada sem parâmetros ou com qualquer coisa diferente de dias ou animais:
// cria objeto vazio, usa forEach em daysArray para adicionar, a cada dia, a chave correspondente,
// e o seu valor pelo retorno da função daysSchedule.
const mainSchedule = () => {
  const obj = {};
  daysArray.forEach((day) => {
    obj[day] = daysSchedule(day)[day];
  });
  obj.Monday = mondaySchedule().Monday;
  return obj;
};

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') return mondaySchedule();
  if (checkParamIsDay(scheduleTarget)) return daysSchedule(scheduleTarget);
  if (checkParamIsAnimal(scheduleTarget)) return animalAvailability(scheduleTarget);
  return mainSchedule();
}

module.exports = getSchedule;
