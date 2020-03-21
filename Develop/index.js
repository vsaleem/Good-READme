// Create a command-line application that dynamically generates a PDF profile from a GitHub username. 
//The application will be invoked with the following command:

//```sh
// node index.js
// ```

// STEP 1: SET UP NODE MODULES
const fs = require('fs');
// const inquirer = require('inquirer');
const path = require('path');


// STEP 1: The user will be prompted to enter GitHub Username,
// STEP 2: The user will be prompted to select a favorite color, 
// STEP 3: THE COLOR SELECTION will be used as the background color for cards.

// STEP 4: CREATE AND WRITE TO FILE: A .PDF doc will Populate with the following GitHub Account info:
//CALL DATA
const generateHTML = require('./generateHTML')

//CREATES AND WRITES TO PDF
fs.writeFile(path.join(__dirname, './', 'UserProfile.pdf'),(generateHTML, data),err => {
    if (err) throw err;
    console.log('User Profile created!');
});

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


// const questions = [
//     {   type: 'input',
//         name: 'title',
//         message: 'What is your GitHub Username?',
//     },
//     {   type: 'input',
//         name: 'title',
//         message: 'What is your favorite color?',
//     },
// ];

// function writeToFile(fileName, data) {
 
// }

// function init() {

// init();
