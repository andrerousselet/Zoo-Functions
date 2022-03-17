const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  // const emptyObj = {};
  // if (employeeName === undefined) {
  //   return emptyObj;
  // }
  if (!employeeName) return {};
  // Usa find para retornar o objeto do funcionário que tiver o nome
  // OU o sobrenome iguais ao parâmetro.
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
}

module.exports = getEmployeeByName;
