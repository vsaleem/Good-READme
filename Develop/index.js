// STEP 1: SET UP NODE MODULES LIBRARIES
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateHTML = require('./generateHTML')
const prompt = inquirer.createPromptModule();
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();



// console.log(generateHTML.data); undefined
// console.log(generateHTML.colors);

// STEP 2: The user will be prompted to enter GitHub Username and favorite color,
inquirer
    .prompt([
        { 
            type: 'input', 
            message: 'What is your GitHub Username?', 
            name: 'username'
        },
        { type: 'list', 
            message: 'What is your favorite color?', 
            name: 'favColor',
            default: '#008f68',
            choices: [ 'Red', 'Blue', 'Green', 'Pink', 'Glitter'],
        }
    ])
// BONUS:
    // If Username is blank, catch err and throw response
    // if(response.input === " " );
    //     console.log("Username.");
    // } else { 
    //     prompt.list

    // };


// OKAY, TIME TO GENERATE FILE..... ASYNCRONIOUSLY!
// STEP 3: The user's COLOR response will activate generator, WHICH will GENERATE NEW COLOR for background color for cards.

/***/

// STEP 4: //CALL generateHTML.js DATA to use for generator: 
    // A .PDF doc will Populate with the following GitHub Account info:
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


// STEP 5: CREATES AND WRITES TO PDF
// fs.writeFile(path.join(__dirname, './', 'UserProfile.pdf'),(generateHTML),err => {
//     if (err) throw err;

//     else {
//     console.log('User Profile created!');
// }});

// console.log(generateHTML);





// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
