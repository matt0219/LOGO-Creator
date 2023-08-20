import fs from 'fs/promises';

async function writeSVGFile(svgContent) {
    try {
        await fs.writeFile('logo.svg', svgContent);
    } catch (error) {
        console.error('Error writing SVG file:', error);
    }
}

export default writeSVGFile;