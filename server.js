// Dependencies
const express = require('express');
const mysql = require('mysql');
const htmlRoutes = require('./routes/htmlRoutes');
const userRoutes = require('./routes/userRoutes');
const apiRoutes = require('./routes/apiRoutes');
const expressHandlebars = require('express-handlebars');
const path = require('path');
// allow heroku to inject a PORT
const PORT = process.env.PORT || 8080;
// instantiate express
const app = express();
// set up express to serve static files
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public'));
// set up express to handle post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set view engine to handlebars
app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// routes
app.use('/myplan', userRoutes);
app.use('/', htmlRoutes);
app.use("", apiRoutes)
// starts server 
app.listen(PORT, () => {
	console.log(`Server listening at PORT: ${PORT}`);
});
