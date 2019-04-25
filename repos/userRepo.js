const User = require('../models/User')

const findAll = async () => {
  const records = await User.findAll()
  // const users = records ? records.map(record => record.toJSON()) : []
  return records
}

const findById = async id => {
  const record = await User.findOne({ where: { id } })
  return record
}

const create = async user => {
  const newUser = await User.create(user)
  return newUser
}

const update = async (id, user) => {
  const userIdDb = await findById(id)

  Object.keys(user).forEach(key => {
    userIdDb[key] = user[key]
  })
  
  userIdDb.save()
}

const del = async id => {
  const record = await User.destroy({ where: { id } })
  return record
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  del
}
