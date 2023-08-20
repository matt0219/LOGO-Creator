import { Triangle, Circle, Square } from './lib/shapes.js';
import collectUserInput from './lib/userInput.js';
import writeSVGFile from './lib/fileWriter.js';

async function main() {
    try {
        const userInput = await collectUserInput();

        let shape;
        switch (userInput.shape) {
            case 'circle':
                shape = new Circle();
                break;
            case 'triangle':
                shape = new Triangle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                throw new Error('Invalid shape choice');
        }

        shape.setColor(userInput.shapeColor);

        const svgContent = shape.render(userInput.text); // Pass the input text to render()
        writeSVGFile(svgContent);

        console.log('Generated logo.svg');
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

main();
