require('dotenv').config()
const port = process.env.PORT || 5000,
  express = require('express'),
  app = express(),
  db = require('./models'),
  cors = require('cors'),
  bodyParser = require('body-parser'),
  passport = require('passport'),
  LocalStrategy = require('./passport/local'),
  JWTStrategy = require('./passport/jwt'),
  morgan = require('morgan'),
  transbankRoutes = require('./routes/transbank')
stock = require('./routes/stock')

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

passport.use('local', LocalStrategy)
passport.use('jwt', JWTStrategy)
app.use(passport.initialize())

app.use('/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'))
app.use('/api/books', require('./routes/books'))
app.use('/api/requests', require('./routes/request'))
app.use('/api/emailConfirmation', require('./routes/emailConfirmation'))
app.use('/api/sale', require('./routes/sales'))
app.use('/api/saleBooks', require('./routes/saleBooks'))
app.use('/', transbankRoutes)
app.use('/', stock)

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`)
})

db.sequelize
  .sync({ force: false })
  .then(() => console.log('Conectado a la base de datos'))
  .catch((e) => console.log(`Error => ${e}`))
