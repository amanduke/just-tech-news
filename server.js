const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
// requires the style.css
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;
const db = require('db')



db.connect({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
})


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// the express.static() method is a built-in Express.js middleware function that
// can take all of the contents of a folder and serve them as static assets
// This is useful for front-end specific files like images, style sheets, and JavaScipt files
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});