const Engineer = require('../lib/Engineer');

test('creates a new Manager object', () => {
    const engineer = new Engineer('Toto', 89, 'toto@email.com', 'toto97');

    expect(engineer.name).toBe('Toto');
    expect(engineer.id).toBe(89);
    expect(engineer.email).toBe('toto@email.com');
    expect(engineer.github).toEqual(expect.any(String));

});