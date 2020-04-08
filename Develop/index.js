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

// let answerBox

function promptUser(){
    return inquirer.prompt([
        { 
            type: 'input', 
            message: 'What is your GitHub Username?', 
            name: 'username'
        },
        { type: 'list', 
            message: 'What is your favorite color?', 
            name: 'favColor',
            default: '#008f68',
            choices: [ 'Red', 'Blue', 'Green', 'Pink'],
        },
    ]) 
        // .then(function(results){
        //     answerBox = results
        //     console.log(answerBox)
        // })    
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