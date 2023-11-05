const connection = require('../db/conn');

const Contact = {};

Contact.allContact = (callback) => {
    connection.query('SELECT * FROM `contact`', (err, results, fields) => {
        callback(err, results);
    });
};

Contact.Contact = (id, callback) => {
    connection.query('SELECT * FROM `contact` WHERE id = ?', id, (err, results, fields) => {
        callback(err, results[0]);
    });
};

Contact.SaveContact = (contact, callback) => {
    connection.query('INSERT INTO `contact` SET ?', contact, (err, results, fields) => {
        callback(err, results);
    });
};

module.exports = Contact;