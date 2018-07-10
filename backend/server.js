const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3000;

const { database } = require('./database');
const  router  = require('./router');

const app = express();

// middleware
app.use(cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/issues', router);


app.listen(port, () => console.log(`Server running on port ${port}`));