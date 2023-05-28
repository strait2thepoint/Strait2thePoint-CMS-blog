const path = require('path'); //This line imports the built-in Node.js module 'path' which provides utilities for working with file and directory paths.
const express = require('express');//This line imports the Express.js module, which is a web application framework for Node.js.
const session = require('express-session'); //This line imports the Express.js session middleware, which enables session management.
const exphbs = require('express-handlebars'); //This line imports the Express Handlebars module, which is a template engine for Express.js.
const routes = require('./controllers');//This line imports the router object from the './controllers' file, which contains the defined routes.
const helpers = require('./utils/helpers'); //This line imports helper functions from the './utils/helpers' file, which are custom helpers used with Handlebars templates.

const sequelize = require('./config/connection'); //This line imports the Sequelize instance from the './config/connection' file, which establishes a connection to the database.
const SequelizeStore = require('connect-session-sequelize')(session.Store); // This line imports the SequelizeStore class from the 'connect-session-sequelize' module, which is used to store session data in the Sequelize-backed database.

const app = express();  //This line creates an instance of the Express application.
const PORT = process.env.PORT || 3001; //This line defines the port number on which the application will listen. It uses the value from the environment variable PORT if available, or defaults to 3001.

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers }); //This line creates an instance of the Handlebars engine with the custom helpers passed as an option.

const sess = { //This block defines the session configuration object with various options for session management. It includes properties such as secret (used to sign the session ID cookie), cookie options, resave, saveUninitialized, and the store property that uses SequelizeStore to store session data in the database.
  secret: 'Allthesecrets',
  cookie: {
    maxAge: 9000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess)); //This line adds the session middleware to the Express application, enabling session management using the provided session configuration.

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);//This line sets the Handlebars engine as the template engine for Express, with 'handlebars' as the file extension for Handlebars templates.
app.set('view engine', 'handlebars'); //This line sets the view engine for the Express application to 'handlebars', indicating that Handlebars templates will be rendered.

app.use(express.json()); // This line adds the middleware to parse JSON bodies of incoming requests.
app.use(express.urlencoded({ extended: true })); //This line adds the middleware to parse URL-encoded bodies of incoming requests.


app.use(express.static(path.join(__dirname, 'public'))); //This line serves static files from the 'public' directory using Express's built-in static middleware. It constructs the absolute path to the 'public' directory using the 'path' module.

app.use(routes); // This line mounts the router object from the './controllers' file on the Express application, which defines the routes and their corresponding handlers.

sequelize.sync({ force: false }).then(() => { //This line synchronizes the Sequelize models with the database. It ensures that the database schema matches the defined models.
  app.listen(PORT, () => console.log('Now listening'));
}); //The force: false option prevents dropping and re-creating the tables if they already exist. After syncing, the server starts listening on the defined PORT, and a message is logged to the console.


//increased time on session and changed the secret phrase.  

//Overall, this code sets up an Express.js application with session management, a Handlebars template engine, database connection, and defined routes for handling various HTTP requests.

//most comments from OpenchatAI  Base code from MSU bootcamp 14.28