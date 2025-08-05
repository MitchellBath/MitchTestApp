const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = false
    if (isValid) {
        users.push({
            firstName: req.body.firstName, 
            lastName: req.body.lastName
        })
        res.redirect(`users/${users.length-1}`)
    }
    else {
        console.log('Error')
        res.render(`users/new`, {firstName: req.body.firstName, lastName: req.body.lastName})
    }
    console.log(req.body.firstName)
})

router.route('/:id')
.get(
    (req, res) => {
    let id = req.params.id
    console.log(req.user)
    res.send(`Update user profile ${id}`)
    }
)
.put(
    (req, res) => {
    let id = req.params.id
    res.send(`Update user profile ${id}`)
    }
)
.delete(
    (req, res) => {
    let id = req.params.id
    res.send(`Delete user profile ${id}`)
    }
)

const users = [{name: "Mitch"}, {name: "Bath"}]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger(req, res, next) {
  console.log(req.originalUrl)
  next()
}

module.exports = router