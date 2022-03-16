const data = require('../data/zoo_data');

const { employees } = data;
// console.log(employees);
// const [nigel, burl, ola, wilburn, stephanie, sharonda, ardith, emery] = employees;
const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';

// function isManager(id) {
//   if (id === stephanieId || id === olaId || id === burlId) {
//     return true;
//   }
//   return false;
// }
const isManager = (id) => id === stephanieId || id === olaId || id === burlId;

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  try {
    const subordinates = employees.filter((employee) => employee.managers.includes(managerId));
    return subordinates.map((subordinate) => `${subordinate.firstName} ${subordinate.lastName}`);
  } catch (e) {
    throw e.message;
  }
}

module.exports = { isManager, getRelatedEmployees };
