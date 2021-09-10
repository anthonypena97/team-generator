const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('Toto', 89, "toto@email.com");

    expect(employee.name).toBe('Toto');
    expect(employee.id).toBe(89);
    expect(employee.email).toBe('toto@email.com');
});

test('returns employee name', () => {
    const employee = new Employee('Toto', 89, "toto@email.com");

    expect(employee.getName()).toEqual(employee.name);
});

test('returns employee id', () => {
    const employee = new Employee('Toto', 89, "toto@email.com");

    expect(employee.getId()).toEqual(employee.id);
});

test('returns employee email', () => {
    const employee = new Employee('Toto', 89, "toto@email.com");

    expect(employee.getEmail()).toEqual(employee.email);
});

test('returns employee', () => {
    const employee = new Employee('Toto', 89, "toto@email.com");

    expect(employee.getRole()).toBe("Employee");
});