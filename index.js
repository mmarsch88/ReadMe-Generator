//Including packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

//Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your Project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "What the relative path to the image you want to use as the screenshot?"
  },
  {
    type: "input",
    name: "link",
    message: "What is the URL of the deployed application?"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "What languages or technologies are used in this project?",
  },
  {
    type: "input",
    name: "creator",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors (GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
  });
}
init();