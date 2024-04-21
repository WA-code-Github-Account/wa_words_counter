#! /usr/bin/env node

import inquirer from "inquirer"

//Declare a constantanswer and assign it:

const answers: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word: "
    }
])

//split the sentence into an array of words:
const words = answers.sentence.trim().split(" ")

//print the array of words to the console:
console.log(words);

//print the word count of sentences to the console:
console.log(`Your sentence word count is: ${words.length}`);