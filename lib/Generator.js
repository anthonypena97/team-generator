const inquirer = require('inquirer');
const managerQuestions = require('../lib/Questions')

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

                    this.askQuestions();

                }
            })

    }

    askQuestions() {

        console.log(`
    #################################
    ############ MANAGER ############
    #################################
    `);

        inquirer
            .prompt(managerQuestions)
            .then((answers) => {
                return console.log(answers);
            })
    }
}

module.exports = Generator;