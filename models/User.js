const Sequelize = require('sequelize')
const sequelize = require('../db')
const bcrypt = require('bcrypt')

const User = sequelize.define(
  'user',
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    // options
  }
)

const encryptPasswordIfChanged = async (user, options) => {
  if (user.changed('password')) {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(user.get('password'), salt)
    user.password = hash
  }
}

User.beforeCreate(encryptPasswordIfChanged)
User.beforeUpdate(encryptPasswordIfChanged)

// User.sync({ force: true })
module.exports = User
