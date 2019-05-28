require('dotenv').config()
const express = require('express');
const session = require('express-session')
const app = express()

const {checkForSession} = require('./middlewares/checkForSession')
const swagController = require('./controllers/swagController')
const authController = require('./controllers/authController')
const searchController = require('./controllers/searchController')

const {SERVER_PORT, SESSION_SECRET} = process.env

app.use(express.json())
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true
    })
);

app.use(checkForSession);

console.log(authController.login)


app.get('/api/swag', swagController.read)

app.post('/api/login', authController.login)
app.post('/api/register', authController.register)
app.post('/api/signout', authController.signout)
app.get('/api/user', authController.getUser)
app.get('/test', () =>{console.log("Hit test")})

app.get('/api/search', searchController.search)

app.listen(SERVER_PORT, ()=> console.log(`Server listening on port ${SERVER_PORT}`))