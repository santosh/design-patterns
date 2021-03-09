var userFactory = require('./userFactory');

let alex = userFactory('Alex Banks', 100)
let eve = userFactory('Eve Porcello', 100, 'employee', 'This and That')

console.log(alex.toString());
console.log(eve.toString());
