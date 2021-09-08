const inquirer = require('inquirer');
const { managerQuestions, engineerQuestions, internQuestions } = require('../src/Questions')
const { managerMock, engineerMock, internMock } = require('../src/MockData');

const Manager = require('./Manager')
const Engineer = require('./Engineer')
const Intern = require('./Intern')

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

		this.manager = []
		this.engineers = []
		this.interns = []
		this.names = []
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

		console.table(names);

		console.log(``);

		inquirer
			.prompt({
				type: 'list',
				name: 'employee_choice',
				message: 'Which type of employee would you like to add?',
				choices: ['Engineer', 'Intern']
			})
			.then((data) => {
				switch (data.employee_choice) {
					case 'Engineer':
						this.askForEngineer();
					case 'Intern':
						this.askForIntern();
					default:
						return console.log('Please chooose and Engineer or Intern');
				}
			})

	}

	askForEngineer() {

	}

	askForIntern() {

	}
}

// ===================================== GENERATOR TEST FUNCTION =====================================

class GeneratorTest {
	constructor() {
		this.manager = []
		this.engineers = []
		this.interns = []
		this.names = []
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

			// //////////////////////////// CHANGE HERE TO managerQuestions //////////////////////////// 

			// .prompt(managerQuestions)
			.prompt(testPrompt)

			.then((data) => {

				// //////////////////////////// UNCOMMENT data = managerMock //////////////////////////// 
				data = managerMock;

				this.manager = new Manager(
					data.manager_name,
					data.manager_id,
					data.manager_email,
					data.manager_office
				);

				// ADDS NEW EMPLOYEE ADDED TO ARRAY FOR DISPLAY IN MENU
				this.names.push(data.manager_name);

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
				switch (data.employee_choice) {
					case 'Engineer':
						this.askForEngineer();
						break;
					case 'Intern':
						this.askForIntern();
						break;
					default:
						return console.log('Please chooose and Engineer or Intern');
				}
			})

	}

	askForEngineer() {

		console.log(`
        #################################
        ########### ENGINEER ############
        #################################
        `);

		inquirer

			// //////////////////////////// CHANGE HERE TO engineerQuestions //////////////////////////// 

			// .prompt(managerQuestions)
			.prompt(testPrompt)

			.then((data) => {

				// //////////////////////////// UNCOMMENT data = engineerMock //////////////////////////// 
				data = engineerMock;

				this.engineers.push( new Engineer(
					data.engineer_name,
					data.engineer_id,
					data.engineer_email,
					data.engineer_office
				));

				// ADDS NEW EMPLOYEE ADDED TO ARRAY FOR DISPLAY IN MENU
				this.names.push(data.engineer_name);

				this.confirmation();
			})

	};

	askForIntern() {

		console.log(`
        #################################
        ############ INTERN #############
        #################################
        `);

		inquirer

			// //////////////////////////// CHANGE HERE TO engineerQuestions //////////////////////////// 

			// .prompt(managerQuestions)
			.prompt(testPrompt)

			.then((data) => {

				// //////////////////////////// UNCOMMENT data = engineerMock ////////////////////////////
				data = internMock;

				this.interns.push( new Intern(
					data.engineer_name,
					data.engineer_id,
					data.engineer_email,
					data.engineer_office
				));

				// ADDS NEW EMPLOYEE ADDED TO ARRAY FOR DISPLAY IN MENU
				this.names.push(data.engineer_name);

				this.confirmation();
			})

	};

	confirmation() {

		console.log(`
        #################################
        ########## CONFRIMATION #########
        #################################
				`);

		console.table(this.names)

		console.log(``);

		inquirer
		.prompt({
			type: 'confirm',
			name: 'continue_confirm',
			message: 'Would you like to continue adding employess?'
		})
		.then((answers) => {

			if(answers.continue_confirm){

				this.askForEmployees();

			} else {

				console.log(`
		    GOODBYE!
				`)

			}
		})
	}
};

module.exports = { Generator, GeneratorTest };