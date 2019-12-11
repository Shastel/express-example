require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json({ type: 'application/json' }));
app.use(morgan('short'));
app.use(cors());

const api = require('./routes/api');

app.use('/api', api);

app.all('*', (req, res) => {
  res.sendStatus(404);
})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});

mongoose.connect(process.env.MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
