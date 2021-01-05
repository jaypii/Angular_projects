module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "mysql$adm",
    DB: "test_ngDB",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };