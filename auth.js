const protect = require('static-auth');
const safeCompare = require('safe-compare');

const auth = protect(
  '/',
  (username, password) =>
    // adminは消したほうがよい
    safeCompare(username, process.env.USERNAME || 'admin') &&
    safeCompare(password, process.env.PASSWORD || 'admin'),
  {
    directory: `${__dirname}/out`,
    onAuthFailed: (res) => {
      res.end('Authentication failed');
    },
  }
);

module.exports = auth;
