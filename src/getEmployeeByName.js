const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  const emptyObj = {};
  if (employeeName === undefined) {
    return emptyObj;
  }
  return employees.find((employee) =>
    (employee.firstName === employeeName || employee.lastName === employeeName));
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
