/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#implicit_grant_flow
 */

var express = require('express'); // Express web server framework
var app = express();

const portNumber = 8888;

app.use(express.static(__dirname + '/public'));
console.log('Server listening on port '+portNumber);
app.listen(portNumber);
