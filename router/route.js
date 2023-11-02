const express = require('express');
const route = express.Router();
const connection = require('../db/conn');

route.get('',(req,res) => {
    connection.query('SELECT * FROM `categories`',(err, results , fields)=>{
        if(err){
            console.log(err);
        }else{
            res.render('index',{results});
        }
    });
})

route.get('/category/:id',(req,res) => {
    const id = req.params.id;
    connection.query('SELECT * FROM `categories` WHERE id = '+id,(err, results , fields)=>{
        if(err){
            console.log(err);
        }else{

            connection.query('SELECT * FROM `course` WHERE `category_id` = '+id,(err, results2 , fields)=>{
                if(err){
                    console.log(err);
                }else{
                    var data = results[0];
                    var courses = results2;
                    res.render('category',{data , courses});
                }
            });

        }
    });
})

route.get('/contact',(req,res) => {
    res.render('contact');
})

route.get('/about',(req,res) => {
    res.render('about');
})

route.get('/courses',(req,res) => {
    res.render('courses')
})

module.exports = route;