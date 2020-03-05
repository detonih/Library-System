const sequelize = require('../config/database');

sequelize.sync()
  .then(() => console.log('Database synced on ' + process.env.NODE_ENV + ' mode'))