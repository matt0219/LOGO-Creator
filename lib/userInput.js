import inquirer from 'inquirer';

async function collectUserInput() {

    const userInput = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: (input) => input.length <= 3 || 'Text should be up to three characters.',
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex code):',
            validate: (input) => /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/i.test(input) || 'Enter a valid color.',
        },
        {
            type: 'input',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input', 
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex code):',
            validate: (input) => /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/i.test(input) || 'Enter a valid color.',
        },
    ]);

    return userInput;
}

export default collectUserInput;