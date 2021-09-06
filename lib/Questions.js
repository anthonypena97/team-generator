const inquirer = require('inquirer')

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

		console.log('Hello!')

	}

}

module.exports = Generator;