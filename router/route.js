const express = require('express');
const route = express.Router();
const Categories = require('../model/categories');
const Course = require('../model/course');
const Contact = require('../model/contact');
const User = require('../model/users');

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

route.get('/contact',(req,res) => {
    res.render('contact');
})

route.post('/contact',(req,res) => {
    Contact.SaveContact(req.body,(err,results) => {
        if(!err){
            res.render('contact',{status : 'Successfull Send Request'});
        }
    });
})

route.get('/about',(req,res) => {
    res.render('about');
})

route.get('/courses',(req,res) => {
    res.render('courses')
})


route.get('/login',(req,res) => {
    res.render('login')
})

route.get('/signup',(req,res) => {
    res.render('signup')
})

route.post('/signup',(req,res) => {
    if(req.body.password == req.body.cpassword){
        const user = {
            first_name : req.body.first_name,
            last_name : req.body.last_name,
            email : req.body.email,
            phone : req.body.phone,
            password : req.body.password,
        };
        User.SaveUser(user,(err,result) => {
            if(!err){
                res.redirect('/login');
            }else{
                console.log(err);
            }
        });
    }else{
        res.send('Password is not match');
    }
})


module.exports = route;