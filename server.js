const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var userRoutes = require('./routes/users');
var donateRoutes = require('./routes/donate');
var movementRoutes = require('./routes/movement');
var volunteerRoutes = require('./routes/volunteer');
var postRoutes = require('./routes/posts');
var tagRoutes = require('./routes/tags');
var categoryRoutes = require('./routes/category');
var mongoose = require('mongoose');
var jsonwebtoken = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const querystring = require('querystring');


//Setting Up Database
mongoose.set('useCreateIndex', true);

mongoose.connect("mongodb://tushar:tushar28@ds137263.mlab.com:37263/nithackathon", {
    useNewUrlParser: true
}, (err) => {
    if (err) console.log("Error in Db connection");
    else console.log("Connected to DataBase");
});
mongoose.Promise = global.Promise;



app.use(cors({
    origin: 'http://localhost:4200'
}))

//Setting up bodyParser Middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
// //Setting up Routers
app.use('/users', userRoutes);
app.use('/donate', donateRoutes);
app.use('/movement', movementRoutes);
app.use('/volunteer', volunteerRoutes);
app.use('/category', categoryRoutes);
app.use('/posts', postRoutes);
app.use('/tags', tagRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client2/src/index.html'));
});



//Listen to port
app.listen(8080, (err) => {
    if (err) console.log("Error Occured During Listening Port");
    else console.log(`Project1 is listening to port 8080`);
})