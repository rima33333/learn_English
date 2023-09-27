const express = require("express")
const router = express.Router()
const User = require('../models/User')
const passport =require('passport')
 // Middleware to check if user is logged in
isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) return next();
    res.redirect('/users/login');
}
 //login page 
router.get('/', (req,res)=>{
    res.render('user/home')
})
//Login  page 
router.get('/login', (req,res)=>{
    res.render('user/login', {
        error: req.flash('error')
    })
})
 // login post request 
router.post('/login',
passport.authenticate('local.login', {
  successRedirect: '/users/test',
    failureRedirect: '/users/login',
    failureFlash: true })
    )
//Sign up page 
router.get('/signup', (req, res) => {
    res.render('user/signup', {
        error: req.flash('error')
    });
});

// Sign up post 
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/users/test',
    failureRedirect: '/users/signup',
    failureFlash: true
    
}
 
));

    router.get('/test',isAuthenticated, (req,res)=>{
        res.render('user/test',{
            success: req.flash('success')
        }); 
         
    })  ;
    router.get('/logout', (req, res) => {
        req.logout(() => {
            res.redirect('/users/login');
        });
    });
module.exports= router