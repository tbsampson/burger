var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({
	extended: false
}));

// override allows user to delete the burgers - hide the evidence :)
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

app.set('port', (process.env.PORT || 3000)); // need this to work with heroku

app.listen(app.get('port'), function () {
	console.log('App listening on PORT ', app.get('port'));
});