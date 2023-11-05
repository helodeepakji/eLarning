const connection = require('../db/conn');

const Course = {};

Course.allCourse = (callback) => {
    connection.query('SELECT * FROM `course`', (err, results, fields) => {
        callback(err, results);
    });
};

Course.Course = (id, callback) => {
    connection.query('SELECT * FROM `course` WHERE id = ?', id, (err, results, fields) => {
        callback(err, results[0]);
    });
};

Course.CourseByCategoryId = (category_id, callback) => {
    connection.query('SELECT * FROM `course` WHERE `category_id` = ?', category_id, (err, results, fields) => {
        callback(err, results);
    });
};

module.exports = Course;