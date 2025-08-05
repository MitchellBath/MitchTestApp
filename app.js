const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))

// user router
const userRouter = require('./routes/users')
app.use('/users', userRouter)

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://localhost:${port}`);
}); 