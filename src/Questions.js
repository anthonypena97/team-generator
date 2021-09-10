// ================================= MANAGER QUESTIONS =================================
const managerQuestions = [
	{
		type: 'input',
		name: 'manager_name',
		message: "What is your manager's name?",
		validate: manager_name => {
			if (manager_name) {
				return true;
			} else {
				console.log('Please enter your manager name!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'manager_id',
		message: "What is your manager's work ID?",
		validate: manager_id => {
			if (manager_id) {
				return true;
			} else {
				console.log('Please enter your manager ID!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'manager_email',
		message: "What is your manager's email?",
		validate: manager_email => {
			if (manager_email) {
				return true;
			} else {
				console.log('Please enter your manager email');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'manager_office',
		message: "What is your manager's office number",
		validate: manager_office => {
			if (manager_office) {
				return true;
			} else {
				console.log('Please enter your manager office number!');
				return false;
			}
		}
	}
];

// ================================= ENGINEER QUESTIONS =================================

const engineerQuestions = [
	{
		type: 'input',
		name: 'engineer_name',
		message: "What is your engineer's name?",
		validate: engineer_name => {
			if (engineer_name) {
				return true;
			} else {
				console.log('Please enter your engineer name!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'engineer_id',
		message: "What is your engineer's work ID?",
		validate: engineer_id => {
			if (engineer_id) {
				return true;
			} else {
				console.log('Please enter your engineer ID!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'engineer_email',
		message: "What is your engineer's email?",
		validate: engineer_email => {
			if (engineer_email) {
				return true;
			} else {
				console.log('Please enter your egineer email');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'egineer_github',
		message: "What is your engineer's github username?",
		validate: engineer_github => {
			if (engineer_github) {
				return true;
			} else {
				console.log('Please enter your egineer github username!');
				return false;
			}
		}
	}
];

// ================================= INTERN QUESTIONS =================================

const internQuestions = [
	{
		type: 'input',
		name: 'intern_name',
		message: "What is your intern's name?",
		validate: intern_name => {
			if (intern_name) {
				return true;
			} else {
				console.log('Please enter your intern name!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'intern_id',
		message: "What is your intern's work ID?",
		validate: intern_id => {
			if (intern_id) {
				return true;
			} else {
				console.log('Please enter your intern ID!');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'intern_email',
		message: "What is your intern's email?",
		validate: intern_email => {
			if (intern_email) {
				return true;
			} else {
				console.log('Please enter your intern email');
				return false;
			}
		}
	},
	{
		type: 'input',
		name: 'intern_school',
		message: "What is your intern's school?",
		validate: intern_school => {
			if (intern_school) {
				return true;
			} else {
				console.log('Please enter your intern school!');
				return false;
			}
		}
	}
];

module.exports = { managerQuestions, engineerQuestions, internQuestions };