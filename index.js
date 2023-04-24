require('dotenv').config();
const port = process.env.PORT || 3000,
express = require('express'),
app = express(),
db = require('./models'),
cors = require('cors'),
bodyParser = require('body-parser'),
passport = require('passport'),
LocalStrategy = require('./passport/local'),
JWTStrategy = require('./passport/jwt');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

passport.use('local', LocalStrategy);
passport.use('jwt', JWTStrategy);
app.use(passport.initialize());

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));

app.listen(port, () => {
    console.log(`Servidor corriendo en puerto ${port}`);
});

db.sequelize
    .sync({ force: false })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((e) => console.log(`Error => ${e}`));