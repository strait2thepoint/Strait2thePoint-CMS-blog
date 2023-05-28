const Sequelize = require('sequelize'); //This line imports the Sequelize module, which is an ORM (Object-Relational Mapping) library for Node.js that simplifies database operations.
require('dotenv').config(); //This line loads environment variables from a .env file into process.env. The .env file typically contains sensitive information such as database credentials.

let sequelize; //This line declares a variable sequelize without assigning any value to it. It will be used to hold the Sequelize instance.

if (process.env.JAWSDB_URL) { //This condition checks if the environment variable JAWSDB_URL is set. This variable is typically used in a production environment to store the database connection URL provided by the JawsDB service on platforms like Heroku.
  sequelize = new Sequelize(process.env.JAWSDB_URL); //is set, this line creates a new Sequelize instance using the connection URL provided in JAWSDB_URL. It establishes a connection to the database specified by the URL.
} else {
  sequelize = new Sequelize( // If JAWSDB_URL is not set, this line creates a new Sequelize instance with the following configuration parameters:
    process.env.DB_NAME,//The name of the database to connect to. This value is typically stored in the environment variable DB_NAME.
    process.env.DB_USER,//The username to authenticate with the database. This value is typically stored in the environment variable DB_USER.
    process.env.DB_PASSWORD, //The password to authenticate with the database. This value is typically stored in the environment variable DB_PASSWORD.
    {
      host: 'localhost', //The hostname where the database is located. In this case, it is set to localhost.
      dialect: 'mysql', //The dialect of the database. This indicates that the database being used is MySQL.
      port: 3306 //The port number on which the database server is running. In this case, it is set to the default MySQL port 3306.
    }
  );
}

module.exports = sequelize; //This line exports the sequelize instance, making it available for other files to import and use for database operations.

//In summary, this code sets up a Sequelize instance for connecting to a MySQL database. It first checks if a JAWSDB_URL environment variable is set, and if so, establishes a connection using the provided URL. Otherwise, it uses environment variables to configure the connection parameters for a local MySQL database. The resulting sequelize instance is then exported for use in other parts of the application.
//all comments from openChatAI for educational purposes.
