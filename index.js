const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

// intialize inquirer and prompt user with nested object questions
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?"
    },
    {
        type: "input",
        name: "installation",
        message: "What is needed for installtion?"
    },
    {
        type: "input",
        name: "usage",
        message: "How will the project be used?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license is the project using?",
        choices: ["ISC", "MIT", "Apache", "Other"]
    },
    {
        type: "input",
        name: "contributing",
        message: "Is there anyone else contributing to the project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Are there any tests that required for this project?"
    },
    {
        type: "input",
        name: "githubPicture",
        message: "Where is your GitHub profile picture?"
    },
    {
        type: "input",
        name: "githubEmail",
        message: "What is your Github email?"
    }

    //then write user response to ReadMe
]).then(function(data) {

    const readMe = `# ${data.title} 
    ## Description ${data.description} 
    ## Table of Contents \n1. Title \n2. Description \n3. Table of Contents \n4. Installation \n5. Usage \n6. License \n7. Contributing \n8. Tests \n9. Questions
    ## Usage ${data.usage}
    ## License <img src='https://img.shields.io/badge/License-${data.license}-blue' alt='badge'>
    ## Constributing ${data.contributing}
    ## Tests ${data.tests}
    


    
    `


})


