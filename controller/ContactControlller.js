const Contact = require('../model/contact');

const viewContact = (req, res) => {
    res.render('contact');
}

const insertContact = (req, res) => {
    Contact.SaveContact(req.body,(err,results) => {
        if(!err){
            res.render('contact',{status : 'Successfull Send Request'});
        }
    });
}

module.exports = {viewContact, insertContact};