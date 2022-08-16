const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express()
const PORT = process.env.PORT || 3001;

// require('dotenv');

//Sets our app to use the handlebars engine
app.set('view engine', 'handlebars');
//Sets handlebars configurations (we will go through them later on)
app.engine('handlebars', exphbs({
layoutsDir: __dirname + '/views/layouts',
}));

const sess = {
    secret: 'Super secret secret',
    cookie: {maxAge:600000},
    resave: false,
    saveUninitialized: true,
    // store: new SequelizeStore({
    //   db: sequelize,
    // }),
  };
//middleware
app.use(express.json());
app.use(session(sess))
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


// app.get('/', (req, res) => {
//     res.render('Hello World');
//   });
app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`))

// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });
