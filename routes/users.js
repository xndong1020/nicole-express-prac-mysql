var express = require('express')
var router = express.Router()
const { findAll, create } = require('../repos/userRepo')

/* GET users listing. */
router.get('/', async (req, res) => {
  const users = await findAll()
  res.send(users)
})

router.post('/', async (req, res) => {
  const newUser = await create(req.body)
  res.status(201).send(newUser)
})

module.exports = router
