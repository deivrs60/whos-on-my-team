const { expect } = require('@jest/globals')
const Intern = require('../lib/Intern')

const intern = new Intern('Deiv', '1', 'email@example.com', 'SFSU')

test('create an intern object', () => {
    expect(intern.name).toBe('Deiv')
    expect(intern.id).toBe('1')
    expect(intern.email).toBe('email@example.com')
    expect(intern.school).toBe('SFSU')
})

test('get the intern name', () => {
    expect(intern.getName()).toBe('Deiv')
})

test('get the intern id', () => {
    expect(intern.getId()).toBe('1')
})

test('get the intern email', () => {
    expect(intern.getEmail()).toBe('email@example.com')
})

test('get the intern school', () => {
    expect(intern.getSchool()).toBe('SFSU')
})

test('get the intern role', () => {
    expect(intern.getRole()).toBe('Intern')
})