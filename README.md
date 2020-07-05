# Spotify Accounts Authentication

This project contains the different OAuth 2.0 flows for [authenticating against the Spotify Web API](https://developer.spotify.com/web-api/authorization-guide/).

These examples cover:

* Authorization Code flow
* Client Credentials flow
* Implicit Grant flow

## Installation

These examples run on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository and install its dependencies running the command in a terminal:

    $ npm install

### Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application.
After doing so, make sure you add these two URIs to the 'Redirect URIs' in the settings of your application. (Edit settings -> Redirect URIs)

* http://localhost:8888 (needed for the implicit grant flow)
* http://localhost:8888/callback

## Running the examples
In order to run the different examples, open the folder with the name of the flow you want to try out, and run its `app.js` file. To run the Authorization Code do:

    $ cd authorization_code
    $ node app.js

To run the Client Credentials Code do:

    $ cd client_credentials
    $ node app.js
    
And to run the Implicit Grant Code do:

    $ cd implicit_grant
    $ node app.js
    
Then, open `http://localhost:8888` in a browser. 

** By default, the application runs locally on port 8888. The port can be changed to anything you desire. Just change the variable parameter on the '.listen()' method inside the app.js file you are trying to open and serve. Or change the 'portNumber' constant to whatever port you wish. OOP is implemented. Props to https://github.com/hughrawlinson for the nice guide and shematic. Enjoy! **
