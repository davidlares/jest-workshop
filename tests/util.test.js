const {greet, isEven, isOdd, getCustomer, getPersons, downloadCV} = require('../util')

// grouping tests with describe
describe('Greet feature', () => {
  // it is the same as test
  it('should get the greet message', () => {
    // assertion library needed here - expect is needed
    const results = greet('David')
    expect(results).toBe('Hello David')
    expect(results).toMatch('David')
    expect(results).toMatch(/Dav/)
  })
})

// even number cases
describe('Even', () => {
  it('should return true if number is even', () => {
    const results = isEven(3)
    expect(results).not.toBeTruthy()
    expect(results).toBeFalsy()
  })

  it('should return false if number is not even', () => {
    const results = isEven(3)
    expect(results).toBeFalsy()
  })
})

// odd number cases
describe('Odd', () => {
  it('should return true if number is odd', () => {
    const results = isOdd(3)
    expect(results).toBeTruthy()
    expect(results).not.toBeFalsy()
  })

  it('should return false if number is not odd', () => {
    const results = isOdd(4)
    expect(results).not.toBeTruthy()
    expect(results).toBeFalsy()
  })
})

// testing objects
describe('Customer', () => {
  it('should find customer by id', () => {
    const results = getCustomer(1)
    expect(results).toBeDefined()
    expect(results).not.toBeUndefined()
    expect(results).toEqual({id: 1, name: 'David'})
    expect(results).toHaveProperty('id', 1)
    expect(results).toEqual(expect.objectContaining({id: 1}))
  })
})

// arrays
describe('Persons', () => {
  it('should fetch all the persons', () => {
    const results = getPersons()
    expect(results).toHaveLength(4)
    expect(results).toContain('David')
    expect(results).toEqual(expect.arrayContaining(['David', 'Doe']))
  })
})

// exceptions
describe('download CV', () => {
  it('should get the content from the CV', () => {
    expect(() => {
      downloadCV() // calling the method, if you pass an arg will fail
    }).toThrow() // using this cb function latrer - catching exception

    expect(() => {
      downloadCV() // calling the method, if you pass an arg will fail
    }).toThrow('invalid URL') // using this cb function latrer - catching exception

    expect(() => {
      downloadCV(null) // calling the method, if you pass an arg will fail
    }).toThrow() // using this cb function latrer - catching exception
  })

  // testing returning content
  it('should get the content from the CV', () => {
      const results = downloadCV('http://localhot:3000/cv/1')
      expect(results).toBe('Content')
  })
})
