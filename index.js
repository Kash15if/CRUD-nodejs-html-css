const express = require('express');
const app = express();
routes = require('./controller/routes');
const mongoose = require('mongoose');





mongoose.connect('mongodb://localhost/SE', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;



app.set('view engine','ejs');


app.use(routes);
app.use('/styles', express.static('styles'));






app.listen(8000);