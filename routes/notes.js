//this is the modular router for notes

const router = require('express').Router();
// Helper functions for id number generation foudn in 'helpers' folder
const uuid = require('../helpers/uuid');
// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');

//initial read from file, to read what already exists within the db database
//relates to the FETCH call in the assets/index.js
router.get('/', (req, res) => {
    readFromFile('./db/db.json')
    .then(data => res.json(JSON.parse(data)))
    .catch(err => res.json( err.message))
});

router.post('/', (req, res) => {
    console.log("post")
    const newNote = {title: req.body.title, text: req.body.text, id: uuid()};
    readAndAppend('./db/db.json', newNote);
    res.json(newNote);
});


module.exports = router;