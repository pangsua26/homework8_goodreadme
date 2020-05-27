const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");

inquirer
.promptUser([
    {
        type: "input",
        name: "title",
        message: "What is the project title?"
    },
    {
        type: "input",
        name: "description",
        message: "What is the project description?"
    }
])


