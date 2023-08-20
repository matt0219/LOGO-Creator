const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle class', () => {
    test('renders correctly', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        const expectedTriangleSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
        const receivedTriangleSVG = triangle.render().trim();
        const normalizedExpectedTriangleSVG = expectedTriangleSVG.trim();
        console.log('Expected:', normalizedExpectedTriangleSVG);
        console.log('Received:', receivedTriangleSVG);
        expect(receivedTriangleSVG).toBe(normalizedExpectedTriangleSVG);
    });
});

describe('Circle class', () => {
    test('renders correctly', () => {
        const circle = new Circle();
        circle.setColor('red');
        const expectedCircleSVG = '<circle cx="150" cy="100" r="80" fill="red" />';
        const receivedCircleSVG = circle.render().trim();
        const normalizedExpectedCircleSVG = expectedCircleSVG.trim();
        console.log('Expected:', normalizedExpectedCircleSVG);
        console.log('Received:', receivedCircleSVG);
        expect(receivedCircleSVG).toBe(normalizedExpectedCircleSVG);
    });
});

describe('Square class', () => {
    test('renders correctly', () => {
        const square = new Square();
        square.setColor('green');
        const expectedSquareSVG = '<rect x="50" y="50" width="200" height="200" fill="green" />';
        const receivedSquareSVG = square.render().trim();
        const normalizedExpectedSquareSVG = expectedSquareSVG.trim();
        console.log('Expected:', normalizedExpectedSquareSVG);
        console.log('Received:', receivedSquareSVG);
        expect(receivedSquareSVG).toBe(normalizedExpectedSquareSVG);
    });
});
