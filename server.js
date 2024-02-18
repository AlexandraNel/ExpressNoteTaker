//importing express and initialising it into variable "app"
const express = require('express');
const app = express();
const PORT = 3001; //specifying PORT into a variable as 3001
const path = require('path'); //path library initialised for use in concatenating path names etc 
const notesData = require('./db/db.json'); //access to the json db for storing notes

app.use(express.json()); //Middleware for parsing json data
app.use(express.static('public')); //access to static files ie. index.html (now accessed automatically on calling the localhost)
app.use(express.urlencoded({ extended: true })); //express middleware assiting with parsing form submission with web browsers



//href on index.html Get Started button leads to /notes
//this will present the nottes.html to the user when they press the Get Started button.
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/notes.html'));  
});

app.get('/api/notes', (req, res) => {
    res.json(notesData);
    console.log(notesData); 
})

//running ther server on PORT
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));