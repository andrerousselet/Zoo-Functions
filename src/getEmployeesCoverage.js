const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

// Função para encontrar informações do funcionário pelo parâmetro - nome, sobrenome ou id
const getEmployeeInfo = (obj) => {
  if (obj.name || obj.id) {
    return employees.find((employee) =>
      (employee.firstName === obj.name
      || employee.lastName === obj.name
      || employee.id === obj.id));
  }
};

// Função para gerar array com nome das especies, usando a função getEmployeeInfo
const getSpeciesNames = (obj) => {
  const workerSpecies = getEmployeeInfo(obj).responsibleFor;
  return workerSpecies.map((element) => species.find((specie) => specie.id === element).name);
};

// Função para gerar array com localizações das especies, usando a função getEmployeeInfo
const getSpeciesLocations = (obj) => {
  const workerSpecies = getEmployeeInfo(obj).responsibleFor;
  return workerSpecies.map((element) => species.find((specie) => specie.id === element).location);
};

// Função para gerar array de objetos (usando map) com todas informações de cada funcionário, usando estruturas
// das funções anteriores
const noParameter = () => {
  const array = employees.map((employee) => {
    const workerSpecies = employee.responsibleFor;
    const object = {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: workerSpecies.map((element) => species
        .find((specie) => specie.id === element).name),
      locations: workerSpecies.map((element) => species
        .find((specie) => specie.id === element).location),
    };
    return object;
  });
  return array;
};

// Função principal: utiliza todas as outras, inclusive a negação da getEmployeeInfo para lançar erro
function getEmployeesCoverage(obj) {
  if (!obj) return noParameter();
  if (!getEmployeeInfo(obj)) {
    throw new Error('Informações inválidas');
  }
  try {
    const object = {
      id: getEmployeeInfo(obj).id,
      fullName: `${getEmployeeInfo(obj).firstName} ${getEmployeeInfo(obj).lastName}`,
      species: getSpeciesNames(obj),
      locations: getSpeciesLocations(obj),
    };
    return object;
  } catch (e) {
    throw e.message;
  }
}

module.exports = getEmployeesCoverage;
