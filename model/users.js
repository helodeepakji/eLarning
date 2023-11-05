const connection = require('../db/conn');

const User = {};

User.allUser = (callback) => {
    connection.query('SELECT * FROM `users`', (err, results, fields) => {
        callback(err, results);
    });
};

User.User = (id, callback) => {
    connection.query('SELECT * FROM `users` WHERE id = ?', id, (err, results, fields) => {
        callback(err, results[0]);
    });
};

User.SaveUser = (user, callback) => {
    connection.query('INSERT INTO `users` SET ?', user, (err, results, fields) => {
        callback(err, results[0]);
    });
};



module.exports = User;