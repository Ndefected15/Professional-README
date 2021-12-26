// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "install",
    message: "Provide installation instructions for the project (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "You need to enter installation instructions for the project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "Provide usage information for the project (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter usage information for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "contribute",
    message: "Provide contribution guidelines for the project (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log(
          "You need to enter contribution guidelines for the project!"
        );
        return false;
      }
    },
  },
  {
    type: "input",
    name: "test",
    message: "Provide test instructions for the project (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter test instructions for the project!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "licensing",
    message: "Choose a license for your project (Required)",
    choices: [
      "Apache",
      "MIT",
      "Mozilla-Public",
      "GNU-General-Public",
      "Common-Development-and Distribution",
    ],
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter a license for the project!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub Username (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("Please enter your GitHub username!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "link",
    message: "Enter the GitHub link to your project. (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a project GitHub link!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;

    // if everything went well, resolve the Promise and send the successful data to the `.then()` method

    console.log("Success! Information transferred to the README!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile(
      "README.md",
      generateMarkdown(userInput),
      renderLicenseBadge(userInput)
    );
  });
}

// Function call to initialize app
init();
