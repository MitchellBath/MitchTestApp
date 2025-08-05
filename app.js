const express = require('express');
const app = express();
const port = 8080;

app.set('view_engine', 'ejs')

// root URL
app.get('/', (req, res) => {
  res.render('index.ejs', {text : 'World'})
  console.log('index sent')
});

// user router
const userRouter = require('./routes/users')
app.use('/users', userRouter)

// Start the server
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
}); 