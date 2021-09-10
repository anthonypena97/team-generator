const Intern = require('../lib/Intern');

test('creates a new Manager object', () => {
    const intern = new Intern('Toto', 89, 'toto@email.com', 'University');

    expect(intern.name).toBe('Toto');
    expect(intern.id).toBe(89);
    expect(intern.email).toBe('toto@email.com');
    expect(intern.school).toEqual(expect.any(String));

});

test("returns intern's school", () => {
    const intern = new Intern('Toto', 89, 'toto@email.com', 'University');

    expect(intern.getSchool()).toEqual(intern.school);
});

test('return role', () => {
    const intern = new Intern('Toto', 89, 'toto@email.com', 'University');

    expect(intern.getRole()).toEqual("Intern");
});