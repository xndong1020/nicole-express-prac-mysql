var express = require('express')
var router = express.Router()
const { findAll, findById, create, update, del } = require('../repos/userRepo')

router.get('/', async (req, res) => {
  const users = await findAll()
  res.send(users)
})

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const user = await findById(id)
  res.send(user)
})

router.post('/', async (req, res) => {
  const newUser = await create(req.body)
  res.status(201).send(newUser)
})

router.put('/:id', async (req, res) => {
  const { id } = req.params
  await update(id, req.body)
  res.status(204).send()
})

router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await del(id)
  res.status(204).send()
})

module.exports = router
