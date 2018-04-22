const express = require('express');
const app = express();

//incoming request, outgoing response
app.get('/', (req, res) => {
  res.send({ bye: 'buddy' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//initial deployment
//git --version
//git init
//git add .
//git commit -m "initial commit"

//subsequent deployment
//git status -> to check the no. of files changed

//after installing heroku cli use heroku -v to check cli version
//heroku login
//heroku create
//git remote add https://git.heroku.com/ancient-waters-89030.git
//git push heroku master
//heroku open
//heroku logs

//mkdir server
//cd server
//npm init
//npm install --save express
//atom .
//node index.js
