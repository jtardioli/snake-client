const net = require("net");


const connect = function() {
  // create server
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.setEncoding("utf8");

  // On connect
  conn.on("connect", () => {
    console.log('Connected!!!');
    conn.write("Name: JDT");
  });

  // recieve data from server
  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = connect;