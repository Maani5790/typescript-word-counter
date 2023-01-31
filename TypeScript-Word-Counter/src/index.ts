#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const runAnimation = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {

    let animation = chalkAnimation.rainbow("Welcome to Word Counter CLI:");
    await runAnimation();

    animation.stop();
};

await welcome();

const answer: {
    sentence: string
} = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word: \n"
    }
]);

const words = answer.sentence.trim().split(" ");
console.log(chalk.cyan(`Your Sentence Word Count Is: ${words.length}`));