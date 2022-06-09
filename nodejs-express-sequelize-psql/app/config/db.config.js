module.exports = {
  HOST: "localhost",
  USER: "jpadm",
  PASSWORD: "pg$adm",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};