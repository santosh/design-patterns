let Shopper = require('./Shopper')
let Employee = require('./Employee')

let alex = new Shopper('Alex Banks', 100)
let eve = new Shopper('Eve Porcello', 100, 'This and That')

console.log(alex.toString());
console.log(eve.toString());
