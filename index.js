// 8>8>8> The best way to learn is to teach it to someone else. <3<3<3

// CREATE YOUR OWN README.md!
// Create a simple node / express generator to make README.md files for your GitHub Repositories, professional resumes, and more.

// Follow the steps below:

// STEP 1: SET UP NODE MODULES LIBRARIES
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const axios = require('axios');
const util = require("util");
// const writeFileAsync = util.promisify(fs.writeFile);

console.log('Ready to create your README.md file.');


// STEP 2:  Create a function called promptUser(). Inquirer.js is used to prompt the user to answer the following array of questions.
function promptUser() {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub Username?',
            name: 'username'
        },

        {
            type: 'input',
            message: `What is your Repositories' title name?`,
            name: 'title'
        },

        {
            type: 'input',
            message: 'Describe your project in 3 sentences or less.',
            name: 'description'
        },

        {
            type: 'input',
            message: 'Do you want to include installation instructions? If so, please describe.',
            name: 'install'
        },

        {
            type: 'input',
            message: 'Describe any information about the potential usage for the project.',
            name: 'usage'
        },

        {
            type: 'list',
            message: 'Would you like to include a license for this project?',
            name: 'license',
            default: '',
            choices: ['Apache License 2.0',
                'GNU General Public License v3.0',
                'MIT License',
                'Mozilla Public License 2.0',
                'None'],
        },

        {
            type: 'list',
            message: 'What is your favorite color?',
            name: 'favColor',
            default: '#008f68',
            choices: ['Red', 'Blue', 'Green', 'Pink'],
        },

        {
            type: 'input',
            message: 'Would you like to include any contributors?',
            name: 'contributors'
        },

        {
            type: 'input',
            message: 'Do you want to include any testing information?',
            name: 'test'
        },

        {
            type: 'input',
            message: 'Almost done......... What is your email address?',
            name: 'email'
        },

        {
            type: 'input',
            message: 'Finally......... Do you want to include any questions or concerns about the project?',
            name: 'questions'
        },

    ])
};

// STEP 3: Create a function that uses the user's prompt responses to initiate the README Generator. Use Axios to retrieve API information.
function init(response) {

    const url = `https://api.github.com/users/${response.username}`;
    let answers = response

    axios.get(url).then(function (data) {
        let followers = data.data.followers;
        let location = data.data.location;
        let bioImg = data.data.avatar_url;
        let readmeFile = generateMarkdown(answers, followers, location, bioImg)
        fs.writeFile("README.md", readmeFile, function (error) {
            if (error) {
                throw error;
            } else {
                console.log("You have successfully created a README.md!")
            }
        })
    })
};

// LAST STEP: Initiate promptUser function with .then response of results.
promptUser().then((results) => {
    init(results);
});


// October 16, 2020
// NOTE: CREATE effect to change the font-color by using the VOID OPERATOR.
