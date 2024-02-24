
//this is the modular router for note handling
const router = require('express').Router();
// Helper functions for id number generation found in 'helpers' folder
const uuid = require('../helpers/uuid');
// Helper functions for reading and writing to the JSON file
const { readFromFile, readAndAppend, writeToFile } = require('../helpers/fsUtils');

//initial read from file, to read what already exists within the db database
//relates to the FETCH getNotes call in the assets/index.js
router.get('/', (req, res) => {
    readFromFile('./db/db.json')
        .then(data => res.json(JSON.parse(data)))
        .catch(err => res.json(err.message))
});

//post will append a new note to our db databse with all the relevant input data PLUS a unique id
//utilising our imported helper uuid function 
//relates to the FETCH saveNote call in the assets/index.js
router.post('/', (req, res) => {
    const newNote = { title: req.body.title, text: req.body.text, id: uuid() };
    readAndAppend('./db/db.json', newNote);
    res.json(newNote);
});

//delete will delete an old note from our database utlising the unique id PARAMETER all note ids that
//do not match ours create a new array & populate the database effectively deleting our unwanted note 
//relates to the FETCH deleteNote call in the assets/index.js
router.delete('/:id', (req, res) => {
    console.log("delete")
    const noteId = req.params.id;

    readFromFile('./db/db.json')
        .then((data) => JSON.parse(data))
        .then((json) => {
            const result = json.filter((entries) => entries.id != noteId);
            return writeToFile('./db/db.json', result);
        })
        .then(() => { res.json("deleted"); })
        .catch(err => {
            console.error(err);
            res.json({ error: err.message });
        });
});


module.exports = router;