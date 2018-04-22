const express = require('express');
const app = express();

//incoming request, outgoing response
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
