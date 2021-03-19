const env = {
    database: 'test_db0321',
    username: 'root',
    password: 'mysql$adm',
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
   
  module.exports = env;