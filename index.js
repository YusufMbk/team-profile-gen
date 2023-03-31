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




const menu = () => {


    function createTeam(){
        inquirer.prompt([
            {
                type:"list",
                name:"members",
                message:"Which roles do you want to add to your team Mr/Mrs Manager?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I would not like to add any more roles",
                ]
            }
        ]).then(userChoice=> {
            if(userChoice.members === "Engineer"){
                addEngineer();
            } else if (userChoice.members === "Intern"){
                addIntern();
            } else {
                buildTeam();
            }
        })
    }

    function addIntern(){
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your name Mr/Mrs Intern?",
            },
            {
                type: "input",
                name: "internId",
                message: "What is your ID Mr/Mrs Intern?",
            },
            {
                type: "input",
                name: "internEmail",
                message:"What is your email Mr/Mrs intern?",
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your School Mr/Mrs intern?",
            },
        ]).then(answers=>{
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internGithub);
            team.push(intern);
            idArray.push(answers.internId);
            createTeam();
        })
    
    }

    function addEngineer(){
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your name Mr/Mrs Engineer?",
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your ID Mr/Mrs Engineer?",
            },
            {
                type: "input",
                name: "engineerEmail",
                message:"What is your email Mr/Mrs Engineer?",
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your GitHub Mr/Mrs Engineer?",
            },
        ]).then(answers=>{
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            team.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }



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
