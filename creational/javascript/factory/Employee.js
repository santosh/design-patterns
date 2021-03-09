const Shopper = require('./Shopper')

class Employee extends Shopper {
  constructor(name, money = 0, employer = '') {
    super(name, money)
    this.employer = employer;
    this.employed = true;
  }

  payDay(moeny = 0) {
    this.money;
  }
}

module.exports = Employee;
