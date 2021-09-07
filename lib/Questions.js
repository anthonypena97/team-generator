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

module.exports = managerQuestions;