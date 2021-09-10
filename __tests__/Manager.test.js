const Manager = require('../lib/Manager');

test('creates a new Manager object', () => {
    const manager = new Manager('Toto', 89, 'toto@email.com', '801-888-8989');

    expect(manager.name).toBe('Toto');
    expect(manager.id).toBe(89);
    expect(manager.email).toBe('toto@email.com');
    expect(manager.office).toEqual(expect.any(String));

});

test('returns office number', () => {
    const manager = new Manager('Toto', 89, 'toto@email.com', '801-888-8989');

    expect(manager.getNumber()).toEqual(expect.any(String));
})

test('returns employee role', () => {
    const manager = new Manager('Toto', 89, 'toto@email.com', '801-888-8989');

    expect(manager.getRole()).toEqual("Manager");
})