//this is the 'notes' modular router
const notes = require('express').Router();
// Helper functions for id number generation foudn in 'helpers' folder
const uuid = require('../helpers/uuid');

// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

module.exports = notes;