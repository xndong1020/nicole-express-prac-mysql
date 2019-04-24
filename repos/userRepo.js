const User = require('../models/User')

const findAll = async () => {
  const records = await User.findAll()
  // const users = records ? records.map(record => record.toJSON()) : []
  return records
}

const create = async user => {
  const newUser = await User.create(user)
  return newUser
}

module.exports = {
  findAll,
  create
}
