const Store = require('./Store')
const inventory = require('./inventory')

let skiShop = new Store('Steep and Deep', inventory.floor)

let searchItem = 'ski hats'
let results = skiShop.find(searchItem)

console.log(results);
