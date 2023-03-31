const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

const team = []
const idArray = []

function buildTeam(){

}


const menu = () => {

    function createManager(){
        console.log("Build your team!");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the team manager's name?",
                validate: answers => {
                    if(answers!== ""){
                        return true
                    }
                    return "Please enter atleast a single character."
                }
            },
            {
                type:"input",
                name:"managerId",
                message:"What is the manager's ID?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is the manager's email?",
            },
            {
                type:"input",
                name:"managerOfficeNum",
                message:"What is the manager's office number?",
            },

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNum)
            team.push(manager);
            idArray.push(answers.managaerId);
            createTeam();
        })
    }

    createManager();
}


menu();
