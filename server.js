const express = require('express');
const app = express();
const port = 8080;
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router.js');

app.use(cors());
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(router);

app.listen(port, err => {
  if (err) throw err;
  console.log(`listening on port: ${port}`);
});
