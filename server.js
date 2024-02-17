// Import express 
const express = require('express');
// initialise express into variable 'app'
const app = express();
//insitialising the PORT for the application in variable POT at 3001
const PORT = 3001;

// Serve static files from the public directory
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`Express Note Taker is listening at http://localhost:${PORT}`)
);
