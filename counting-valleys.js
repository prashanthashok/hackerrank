'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the countingValleys function below.
function countingValleys(n, s) {
    let seaLevel = 0;
    let valley = 0;
    let mountain = 0;
    let i = 0;
    let steps = s.split('');

    //Gary has to take at least 2 steps to get back to sea level
    if (steps.length < 2) return;

    //Gary has to come back to sea level
    if (steps.length === 2 && ((steps[0] === 'U' && steps[1] !== 'D') || (steps[0] === 'D' && steps[1] !== 'U'))) {
        console.log('I\'m stuck, help!');
        return;
    }
    
    while (i <= n) {
        switch (steps[i]) {
            case 'U':
                seaLevel++;
                if (seaLevel === 0) valley++;
                break;
            case 'D':
                seaLevel--;
                if (seaLevel === 0) mountain++;
                break;
        }
        i++;
    }
    return valley;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const s = readLine();

    let result = countingValleys(n, s);

    ws.write(result + "\n");

    ws.end();
}
