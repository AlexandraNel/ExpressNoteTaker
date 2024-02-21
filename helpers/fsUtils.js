//this file contains functions that are exported to my application and utilised to manage incoming
//data as well as write data and append it

const fs = require('fs'); //node module "file system" assist in reading/writing files
const util = require('util'); //node module "util" assist in programming tasks ie. inspecting objects

// Converts callback-based asynchronous function into a function that returns a Promise.
const readFromFile = util.promisify(fs.readFile);

//this function will store user input as a json file to support my middleware
//using 'detination' as the place to save recieved input
//using 'content' as content inputted that we want to save
const writeToFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${destination}`)
    );

//this function reads the stored json data file, parses it to a useable object, 
//writes new inputted content to the useable object,  
//and restringifies back to json, writing it back into the storage file 
//using 'content' as the newly inputted content from user
//using 'file' as the current 'db' json data storage file to be added to 
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeToFile(file, parsedData);
        }
    });
};


//modular functions are accessible outside of this file
module.exports = { readFromFile, writeToFile, readAndAppend };