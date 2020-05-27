const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

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

])


