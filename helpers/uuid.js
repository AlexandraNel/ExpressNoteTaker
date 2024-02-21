// This file is a function that a string of random numbers and letters to create an ID

module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
