const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Toto', 89, "toto@email.com");

    expect(employee.name).toBe('Toto');
    expect(employee.id).toBe(89);
    expect(employee.email).toBe('toto@email.com');
});