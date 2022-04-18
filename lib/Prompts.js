
const { writeFile } = require('../dist/htmlgenerator');
const inquirer = require('inquirer');
const generatePage = require('../src/page-template');

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
            message: 'What is the Managers email? (Required)',
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
            message: 'What is the managers office number? (Required)',
            validate: officeNumberInput => {
                if(isNaN(officeNumberInput)) {
                    return "Please enter a valid office number"
                } else {
                    return true;
                }
            }
        },

        /// Add Engineer and/or Intern Choices
        {
            type: 'confirm',
            name: 'addEngineer',
            message: 'Would you like to add an Engineer to your team?',
            default: false
        },
        {
            type: 'confirm',
            name: 'addIntern',
            message: 'Would you like to add an Intern to your team?',
            default: false
        }
        ])
      
    }

    // ENGINEER
    // If user chose to add an Engineer to the team, these prompts are triggered
    const engineerPrompts = promptData => {
        if(promptData.addEngineer) {
            // generates empty array 
            if(!promptData.engineers) {
                promptData.engineers = [];
            }
            // continue with engineer prompts 
            return inquirer.prompt([
                {
                    type:'input',
                    name: 'engineerName',
                    message: 'What is the Engineers name? (Required)',
                    validated: engineerNameInput => {
                        if(engineerNameInput) {
                            return true;
                        } else {
                            console.log('Please enter a name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerID',
                    message: 'What is the Engineers ID? (Required)',
                    validate: engineerIDInput => {
                        if(engineerIDInput) {
                            return true;
                        } else {
                            console.log('Please enter the Engineers ID!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerEmail',
                    message: "What is the Engineers email? (Required)",
                    validate: enginerEmailInput => {
                        if(enginerEmailInput) {
                            return true;
                        } else {
                            console.log('Please enter the Engineers email.')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'engineerGithub',
                    message: 'What is the Engineers Github username? (Required)',
                    validate: engineerGithubInput => {
                        if(engineerGithubInput) {
                            return true;
                        } else {
                            console.log('Please enter the Engineers Github Username!')
                            return false;
                        }
                    }
                },
                {
                    /// Add Another Engineer ?
                    type: 'confirm',
                    name: 'confirmAddAnotherEngineer',
                    message: 'Would you like to add another Engineer?',
                    default: false

                }
            ])

            // Push Answers * Return Prompts for more input if user wants to add more engineers
            // Return Prompt Data Regardless of answer
            .then(engineerAnswers => {
                promptData.engineers.push(engineerAnswers);
                if(engineerAnswers.confirmAddAnotherEngineer) {
                    return engineerPrompts(promptData);
                } else {
                    return promptData;
                }
            })
            // if user chose not to add an engineer; return data
        } else {
            return promptData;
        }
    }

    // INTERN 
    // If user chose to add an intern
    const internPrompts = promptData => {
        // if user chose to add an intern in first prompt
        if(promptData.addIntern) {
            // generate empty array 
            if(!promptData.interns) {
                promptData.interns = [];
            }
            return inquirer.prompt([
                {
                    type: 'input',
                    name: 'internName',
                    message: 'What is the Interns name? (Required)',
                    validate: internNameInput => {
                        if(internNameInput) {
                            return true;
                        } else {
                            console.log('Please enter the interns name!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: 'What is the interns ID? (Required)',
                    validate: internIDInput => {
                        if(internIDInput) {
                            return true;
                        } else {
                            console.log('Please enter the Interns ID!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'What is the Interns Email? (Required)',
                    validate: internEmailInput => {
                        if(internEmailInput) {
                            return true;
                        } else {
                            console.log('Please enter the Interns email!')
                            return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'Where does the Intern attend School? (Required)',
                    validate: internSchoolInput => {
                        if(internSchoolInput) {
                            return true;
                        } else {
                            console.log('Please enter the Interns school!')
                            return false;
                        }
                    }
                },
                {
                    type: 'confirm',
                    name: 'confirmAddAnotherIntern',
                    message: 'Would you like to add another intern?',
                    default: false
                }
            ])
            // Push Answers into array.
            .then(internAnswers => {
                promptData.interns.push(internAnswers);
                if(internAnswers.confirmAddAnotherIntern) {
                    return internPrompts(promptData);
                } else {
                    return promptData;
                }
            }) 
        } else {
            return promptData;
        }
    }

    // call all prompts in order.
    managerPrompts()
    .then(engineerPrompts)
    .then(internPrompts)
    .then(htmlData => {
        return generatePage(htmlData)
    })
    .then(pageHTML => {
        return writeFile(pageHTML)
    })
  

}


module.exports = Prompts;