const mysql = require("mysql")

const pool = mysql.createPool({
  connectionLimit: 10,
  database: "ryanslist",
  user: "root",
  password: "",
  host: "localhost"
})
module.exports = pool
