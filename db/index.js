const Sequelize = require('sequelize')

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  'expresssequelize',
  'expresssequelize',
  'Fc9q8aQ3_K!Q',
  {
    host: 'den1.mysql6.gear.host',
    dialect: 'mysql'
  }
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err)
  })

module.exports = sequelize
