const { expect, test } = require('@jest/globals');
const Manager = require('../lib/Manager');


const manager = new Manager('Deiv', '1', 'email@example.com', '60')

test('create a manager object', () => {
    expect(manager.name).toBe('Deiv')
    expect(manager.id).toBe('1')
    expect(manager.email).toBe('email@example.com')
    expect(manager.officeNumber).toBe('60')
})

test('get the managers name', () => {
    expect(manager.getName()).toBe('Deiv')
})

test('get the managers id', () => {
    expect(manager.getId()).toBe('1')
})

test('get the managers email', () => {
    expect(manager.getEmail()).toBe('email@example.com')
})

test('get the managers office number', () => {
    expect(manager.getOfficeNumber()).toBe('60')
})

test('get the manager role', () => {
    expect(manager.getRole()).toBe('Manager')
})