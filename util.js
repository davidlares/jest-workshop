function greet(name) {
  return `Hello ${name}`
}

function isEven(n) {
  return n % 2 == 0
}

function isOdd(n) {
  return Math.abs(n % 2) == 1
}

function getCustomer(id) {
  return {id, name: 'David'}
}

const persons = ['David', 'Doe', 'Sane', 'Goro']

function getPersons() {
  return persons
}

function downloadCV(path) {
  if(!path) {
    throw new Error('invalid URL')
  }
  return 'Content'
}

module.exports = {
  greet, isEven, isOdd, getPersons, getCustomer, downloadCV
}
