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

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    ar.sort();
    console.log(ar);

    let currentSock = ar[0];
    let matchingPairs = 0;

    for (let i = 1; i < ar.length; i++){
        if (currentSock === ar[i])
        {
            matchingPairs++;
            console.log('match found ' + currentSock + ' ' + ar[i]);
            i++;
            currentSock = ar[i];
        }
        else {
            console.log('match not found ' + currentSock + ' ' + ar[i]);
            currentSock = ar[i];
        }
        
    }
    return matchingPairs;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = sockMerchant(n, ar);

    ws.write(result + "\n");

    ws.end();
}
