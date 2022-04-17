const inquirer = require('inquirer')

function Prompts() {
    
    // MANAGER 
    const managerPrompts = () => {
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is the name of the Manager? (Required)',
                validate: managerNameInput => {
                    if(managerNameInput ) {
                         return true;
                    } else {
                    console.log('Please enter the Manager name!')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the Managers ID? (Required)',
            validate: managerIDInput => {
                if(managerIDInput) {
                    return true 
                } else {
                    console.log("Please enter the managers ID!")
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the Managers email?',
            validate: managerEmailInput => {
                if(managerEmailInput) {
                    return true;
                } else {
                    console.log('Please enter the managers email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'What is the managers office number?',
            validate: officeNumberInput => {
                if(isNaN(officeNumberInput)) {
                    return "Please enter a valid office number"
                } else {
                    return true;
                }
            }
        },

        ])



      
    }
}


module.exports = Prompts;