const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "csscheduler"
})

connection.connect((err) => {
    if(err) {
        console.error("error connecting to database" + err.stack);
        return;
    }

    console.log("connected to db successfully")

});

module.exports = connection;