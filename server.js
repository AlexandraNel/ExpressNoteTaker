//server.js is my entry point of my application. 
//It will direct traffic to my api, present my static files aand make my app available on specified port

//importing express and initialising it into variable "app"
const express = require('express');

//path library initialised for use in concatenating path names etc 
const path = require('path');

//specifying PORT into a variable as 3001 making it accessible with heroku
const PORT = process.env.PORT || 3001;

//this is the routing hub location it is the index for all of our api routing 
const api = require('./router/index');


//this initialises the required expressjs 
const app = express();

//Middleware for parsing json data
app.use(express.json());
//express middleware assiting with parsing form submission with web browsers
app.use(express.urlencoded({ extended: true }));
//access to static files ie. index.html 
app.use(express.static('public'));

//initialising the api routing hub after express or an error will be thrown
//notes route will therefore be /api/notes
app.use('/api', api);


// GET route for the homepage, catch all for GET requests '*'
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

//GET route for the notes page
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//running ther server on PORT
app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));