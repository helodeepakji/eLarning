const connection = require('../db/conn');

const Categories = {};

Categories.allCategories = (callback) => {
    connection.query('SELECT * FROM `categories`', (err, results, fields) => {
        callback(err, results);
    });
};

Categories.Category = (id, callback) => {
    connection.query('SELECT * FROM `categories` WHERE id = ?', id, (err, results, fields) => {
        callback(err, results[0]);
    });
};



module.exports = Categories;