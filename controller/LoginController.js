const User = require('../model/users');

const insertUser = (req, res) => {
    if (req.body.password == req.body.cpassword) {
        const user = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: req.body.password,
        };
        User.SaveUser(user, (err, result) => {
            if (!err) {
                res.redirect('/login');
            } else {
                console.log(err);
            }
        });
    } else {
        res.send('Password is not match');
    }
}

const loginUesr = (req, res) => {
    User.UserByEmail(req.body.email, (err, result) => {
        if (!err) {
            if (result) {
                if (result.password === req.body.password) {
                    req.session.userId = result.id;
                    res.redirect('/');
                } else {
                    res.send('Password is incorrect');
                }
            } else {
                res.send('User not found , Check your mail id');
            }
        }
    });
}

const logOutUesr = (req, res) => {
    req.session.destroy((err) => {
        if (!err) {
            res.redirect('/');
        }
    })
}

const viewLogin = (req,res) => {
    res.render('login')
}

const viewSignup = (req,res) => {
    res.render('signup')
}

module.exports = { insertUser, loginUesr, logOutUesr , viewLogin , viewSignup};