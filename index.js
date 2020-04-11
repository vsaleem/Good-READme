// STEP 1: SET UP NODE MODULES LIBRARIES
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
const EventEmitter = require('events');
const axios = require('axios');
const util = require("util");
// const prompt = inquirer.createPromptModule();
const writeFileAsync = util.promisify(fs.writeFile);

///////////////////

console.log('Lets make your resume!!');
// STEP 2: The user will be prompted to enter GitHub Username and favorite color,

function promptUser(){
    return inquirer.prompt([
        { 
            type: 'input', 
            message: 'What is your GitHub Username?', 
            name: 'username'
        },

        {
            type: 'input',
            message: 'What is your project title name?',
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
            choices: [ 'Apache License 2.0',
                        'GNU General Public License v3.0',
                        'MIT License',
                        'Mozilla Public License 2.0',
                        'None' ],  
        },

        { 
            type: 'list', 
            message: 'What is your favorite color?', 
            name: 'favColor',
            default: '#008f68',
            choices: [ 'Red', 'Blue', 'Green', 'Pink'],
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
        
    // console.log('Okkkkk! Time to generate your profile!')
    function init(response){            

            const url = `https://api.github.com/users/${response.username}`;
            let answers = response
        
            axios.get(url).then(function(data){
              let followers = data.data.followers;
              let location = data.data.location;
              let bioImg = data.data.avatar_url;
              let readmeFile = generateMarkdown(answers, followers, location, bioImg)
              fs.writeFile("README.md", readmeFile, function(error){
                  if(error){
                      throw error;
                  }else{
                      console.log("it worked!!")
                  }
              })
        })
    };
    promptUser().then((results)=>{
        init(results);
    });

    // then(
    // async function init() {

    //     const answers = await favColor();
    //     answers.favColor = answers.favColor.EventEmitter("");
    //     return answers;
    // })
    //     console.log(answers);
    // init();

        // Look at homework requirements +++++Write questions you need 
        // Look at data that you get back from gitHub. Ex. Profile picture, etc.
        // Structure readme correctly!!! Needs Table of Contents etc...
