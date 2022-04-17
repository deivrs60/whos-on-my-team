const { expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

const employee = new Employee('Deiv', '1', 'email@example.com')

test('Create an employee object', () => {
    expect(employee.name).toBe('Deiv')
    expect(employee.id).toBe('1')
    expect(employee.email).toBe('email@example.com')
})

test('Get employee name', () => {
    expect(employee.getName()).toBe('Deiv')
})

test('Get employee id', () => {
    expect(employee.getId()).toBe('1')
})

test('Get employee email', () => {
    expect(employee.getEmail()).toBe('email@example.com')
})

test('Get the employee role', () => {
    expect(employee.getRole()).toBe('Employee')
})