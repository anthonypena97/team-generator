const inquirer = require('inquirer');
const { managerQuestions, engineerQuestions, internQuestions } = require('../src/Questions')
const { managerMock, engineerMock, internMock } = require('../src/MockData');

const manager = []
const engineers = []
const interns = []

const testPrompt = [
    {
        type: 'confirm',
        name: 'test_prompt',
        message: 'This is a tempt prompt, enter y to continue'
    }
]

// ===================================== GENERATOR FUNCTION =====================================

class Generator {
    constructor() {
    }

    initializeQuestions() {

        console.log(`
        #################################
        ######### TEAM GENERATOR ########
        #################################
        `);

        inquirer
            .prompt({
                type: 'confirm',
                name: "start_confirmation",
                message: 'Would you like to generate a web page for your team?'
            })
            .then((confirmation) => {
                if (!confirmation.start_confirmation) {

                    return console.log(`
                
        Goodbye!
                
      `);

                } else {

                    this.askForManager();

                }
            })

    }

    askForManager() {

        console.log(`
        #################################
        ############ MANAGER ############
        #################################
        `);

        inquirer
            .prompt(managerQuestions)
            .then((data) => {
                manager.push(data);
                this.askForEmployees();
            })
    }

    askForEmployees() {

        console.log(`
        #################################
        ########### EMPLOYEES ###########
        #################################
        `);

        inquirer
            .prompt({
                type: 'list',
                name: 'employee_choice',
                message: 'Which type of employee would you like to add?',
                choices: ['Engineer', 'Intern']
            })
            .then((data) => {
                if (data === 'Engineer') {

                    return console.log('Engineer');

                } else if (data === 'Intern') {

                    return console.log('Intern');

                }
            })

    }
}

// ===================================== GENERATOR TEST FUNCTION =====================================

class GeneratorTest {
    constructor() {
    }

    initializeQuestions() {

        console.log(`
        #################################
        ### TEAM GENERATOR TEST MODE ####
        #################################
        `);

        inquirer
            .prompt({
                type: 'confirm',
                name: "start_confirmation",
                message: 'Would you like to generate a web page for your team?'
            })
            .then((confirmation) => {
                if (!confirmation.start_confirmation) {

                    return console.log(`
                
        Goodbye!
                
      `);

                } else {

                    this.askForManager();

                }
            })

    }

    askForManager() {

        console.log(`
        #################################
        ############ MANAGER ############
        #################################
        `);

        inquirer
            // .prompt(managerQuestions)

            .prompt(testPrompt)

            .then((data) => {
                manager.push(managerMock);
                this.askForEmployees();
            })
    }

    askForEmployees() {

        console.log(`
        #################################
        ########### EMPLOYEES ###########
        #################################
        `);

        inquirer
            .prompt({
                type: 'list',
                name: 'employee_choice',
                message: 'Which type of employee would you like to add?',
                choices: ['Engineer', 'Intern']
            })
            .then((data) => {
                if (data === 'Engineer') {

                    return console.log('Engineer');

                } else if (data === 'Intern') {

                    return console.log('Intern');

                }
            })

    }
}

module.exports = { Generator, GeneratorTest };