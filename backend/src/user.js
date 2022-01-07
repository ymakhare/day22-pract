const mysql = require("mysql");
var Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const ConnectionCheck = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  console.log("Connection Checked");
  await connection.endAsync();
};

const adduser = async (user) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();
  let addquery = `insert into employeedata values (?,?,?,?)`;
  await connection.queryAsync(addquery, [
    user.eid,
    user.ename,
    user.salary,
    user.emobno,
  ]);
  await connection.endAsync();
};

// const user = {
//   eid: "1",
//   ename: "yogesh",
//   salary: "10k",
//   emobno: "5469851",
// };

module.exports = { adduser };
//adduser(user);
//ConnectionCheck();
