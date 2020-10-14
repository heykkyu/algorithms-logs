'use strict';

// const fs = require('fs');
// const https = require('https');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }
const request = require('request');


async function getCountryName(code) {
    let page = 1;
    getApi(page);
    
    function getApi(page) {
        request({
        url: 'https://jsonmock.hackerrank.com/api/countries?page=' + page,
        }, function(err, res, html) {
            if (err) {
                return;
            }
            
            const data = JSON.parse(html).data;
            let filtered = data.filter(item => item.alpha2Code == code);
            
            if (filtered.length === 1) {
              const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
              ws.write(filtered[0].name);
            } else {
              getApi(++page)
            }
            
        })
    }
}

// async function main() {
//   const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

//   const code = readLine().trim();

//   const name = await getCountryName(code);

//   ws.write(`${name}\n`);

// }
