const Store = require('./Store')
const Shopper = require('./Shopper')
const Mall = require('./Mall')

const castAndThings = new Store("Cats & Things")
const insAndOuts = new Store("Ins & Outs")

const alex = new Shopper("Alex")
const eve = new Shopper("Eve")
const sharon = new Shopper("Sharon")
const mike = new Shopper("Mike")

const valleyMall = new Mall()

castAndThings.subscribe(alex)
castAndThings.subscribe(eve)
castAndThings.subscribe(mike)
castAndThings.subscribe(valleyMall)

insAndOuts.subscribe(sharon)
insAndOuts.subscribe(valleyMall)

castAndThings.sale(20)
insAndOuts.sale(50)

console.log(valleyMall.sales);
