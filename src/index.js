'use strict';

var inquirer = require('inquirer');

function initializeShatta() {

    inquirer
        .prompt([
            /* Pass your questions in here */
            {
                message: 'Welcome to Shatta-Git\n=========\nEnter your github username to begin\n', //now we can add some beautiful design here
                type: 'input',
                name: 'username'
            }
        ])
        .then((answers) => {
        // Use user feedback for... whatever!!d
        //use feedback fot the feedbackId that is required for asynchronous operations to be handled successfully.
            console.log("Secret User Key===>"+process.env.SHATTAGIT_USER_KEY);
        console.log("Answers====>", answers);
})

}

function sayHello() {
    console.log("Hello there");
}

// module.exports = initializeShatta();
module.exports = initializeShatta();