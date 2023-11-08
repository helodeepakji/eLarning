const express = require('express');
const route = express.Router();
const Categories = require('../model/categories');
const Course = require('../model/course');
const protect = require('../middleware/protect');
const {viewContact, insertContact} = require('../controller/ContactControlller');
const { insertUser, loginUesr, logOutUesr , viewLogin , viewSignup} = require('../controller/LoginController');

route.get('',(req,res) => {
    Categories.allCategories((err,results)=>{
        if(!err){
            res.render('index',{results});
        }
    });
})

route.get('/category/:id',(req,res) => {
    const id = req.params.id;
    Categories.Category(id,(err,data)=>{
        if(!err){
            Course.CourseByCategoryId(id,(err,courses) => {
                res.render('category',{data , courses});
            });
        }
    });
})

route.get('/contact',viewContact)

route.post('/contact',insertContact)

route.get('/about',(req,res) => {
    res.render('about');
})

route.get('/courses',(req,res) => {
    res.render('courses')
})


route.get('/login', viewLogin)

route.post('/login',loginUesr)

route.get('/logout', logOutUesr)

route.get('/profile', (req, res) => {
    if (req.session.userId) {
        res.send('User is authenticated' + req.session.userId);
    } else {
        res.status(401).send('User is not authenticated');
    }
});

route.get('/signup',viewSignup)

route.post('/signup',insertUser)

route.get('/course-details/:id',protect,(req,res) => {
    var id = req.params.id;
    Course.Course(id , (err,result) => {
        res.render('course-details',{result});
    });
})

module.exports = route;