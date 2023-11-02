const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user: 'root',
    port : 3306,
    password : '',
    database: 'elearning'
});

connection.connect(function(err){
    if(err){
        console.log('Error connection Mysql ' + err);
    }else{
        console.log('Connection successfull.');
    }
});

module.exports = connection;