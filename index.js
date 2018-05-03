const express = require('express');
// require('./services/passport');
// const authRoutes = require('./routes/authRoutes');

const app = express();

// authRoutes(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//incoming request, outgoing response
app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});



//heroku deployment
/**
 * 1. dynamic port binding
 * 2. specify node environment
 * 3. specify start Script
 * 4. create .gitignore file
 */

//initial deployment
/**
 * git --version
 * git init
 * git add .
 * git commit -m "initial commit"
 */

//after installing heroku cli use heroku -v to check cli version
/**
 * heroku login
 * heroku create
 * git remote add heroku https://git.heroku.com/ancient-waters-89030.git
 * git push heroku master
 * heroku open
 * heroku logs
 */

//subsequent deployment
/**
 * git status -> to check the no. of files changed
 * git add .
 * git commit -m "files changed"
 * git push heroku master
 */

//mkdir server
//cd server
//npm init
//npm install --save express
//atom .
//node index.js

//npm install --save passport passport-google-oauth20