const bodyParser = require('body-parser');
const  express= require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

const UserRoutes=  require('./routes/users');

mongoose.Promise = global.Promise; 
mongoose.connect('mongodb://localhost/rest-api-example',{useNewUrlParser: true,useUnifiedTopology: true
}).then(db=> console.log('db is connected'))
    .catch (err => console.log(err));


//settings
app.set('port', process.env.PORT||3000);

//middleware
app.use(bodyParser.json());
app.use(morgan('dev'));

//routes
app.use('./users',UserRoutes);

//static files

//error handlers


//start the server
app.listen(app.get('port'), ()=>{
    console.log('server on port', app.get('port'));
});