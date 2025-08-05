const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs')
app.use(express.static('public'))

// user router
const userRouter = require('./routes/users')
app.use('/users', userRouter)

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
}); 