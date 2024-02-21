//index router/ central hub
//this acts as a central hub for other oute modules

//declares a new router instance for this route module
const router = require ('express').Router();

// points to my notes router
const notesRouter = require('./notes');
//utilises notes route. notes route will therefore be /api/notes as we are inside /api hub
router.use('/notes', notesRouter);



// is this common syntax?
// const express = require('express');
// const router = express.Router();



module.exports = router;