
const crypto = require('crypto');

// Generate a random string of a specified length
const generateRandomString = (length) => {
  return crypto.randomBytes(Math.ceil(length / 2)).toString('hex').slice(0, length);
};

// Generate a random secret key with a recommended length of 64 characters
const secretKey = generateRandomString(64);

console.log(`Generated Secret Key: ${secretKey}`);
