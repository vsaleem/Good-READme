// STEP 1: SET UP NODE MODULES LIBRARIES
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require('./generateHTML')
const prompt = inquirer.createPromptModule();

// STEP 1: The user will be prompted to enter GitHub Username and favorite color,
// inquirer
    // .prompt([
    //     { type: 'input', 
    //         message: 'What is your GitHub Username?', 
    //         name: '',
    //     },
    //     { type: 'list', 
    //         message: 'What is your favorite color?', 
    //         name: '',
    //         choices: [ /*Choices array or function returning a choices array*/],
    //     }
    // ])

const questions = [
    {   
        type: 'input',
        message: 'What is your GitHub Username?',
        name: '',
    },
    {   
        message: 'What is your favorite color?',
    },
];
console.log(questions)



// STEP 2: The user's answers will activate generator, 
    prompt(questions).then(inquirer => {
        //User feedback
    })
    // console.log(answers);

    .catch(err => {
        if(err.isTtyError) {
            // For some reason the prompt couldn't be rendered
        } else {
            // Something else went wrong
        }
    });






// STEP 3: THE COLOR SELECTION will be used as the background color for cards.

// STEP 4: CREATE AND WRITE TO FILE: A .PDF doc will Populate with the following GitHub Account info:
//CALL DATA

//CREATES AND WRITES TO PDF
// fs.writeFile(path.join(__dirname, './', 'UserProfile.pdf'),(generateHTML, data),err => {
//     if (err) throw err;
//     console.log('User Profile created!');
// });

// console.log(generateHTML);

    // * Profile image
    // * User name
    // * Links to the following:
        //   * User location via Google Maps
        //   * User GitHub profile
        //   * User blog
    // * User bio
        // * Number of public repositories
        // * Number of followers
        // * Number of GitHub stars
        // * Number of users following




// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
