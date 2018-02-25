const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Auth = require('../models/AuthDB')
const Admin = require('../models/Admin')
const User = require('../models/user')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = require('./lib/secret')
//====================================================
const app = express.Router()
// var token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBvbmciLCJQYXNzIjoiMjAyY2I5NjJhYzU5MDc1Yjk2NGIwNzE1MmQyMzRiNzAiLCJpYXQiOjE1MTc0MjE3MTUsImV4cCI6MTUxNzQyNDcxNX0.7IcdxFzkdsjB7leLFPg49LqjwfZcs_q5twdNevQANfE"
//=================================================================================================================
        //  // @route middleware to verify a token
        // app.use(function(req, res, next) {

        //     // @check header or url parameters or post parameters for token
        //       token = req.body.token || req.query.token || req.headers['authorization'];
        //       if (token) {
        //             jwt.verify(token, secret , function(err, decoded) { 
        //               if (err) {
        //                 return res.json({ success: false, message: 'Failed to authenticate token timeout.' });    
        //               } else {
        //                 req.decoded = decoded;    
        //                 next();
        //               }
        //             });

        //           } else {

        //             // @if there is no token
        //             // @return an error
        //             return res.status(403).send({ 
        //                 success: false, 
        //                 message: 'No token provided.' 
                        
        //             });

        //       }
        // });
//=================================================================================================================

    
//=================================================================================================================

        app.get('/',cors(),function(req,res){
        User.aggregate([ 
                {$match : {Admin: 0}}
            ], (err, docs) => {
                res.send(docs)
                // console.log(docs)
              })
             })
        app.post('/',cors(),function(req,res){
                console.log(req.body)

                User.updateMany({Email:req.body.Email},{Admin:req.body.Admin,Status:req.body.Status},(err,status)=>{
                        console.log(status)
                })
        })
        app.post('/user',cors(),function(req,res){
                // console.log(req.body)
                var decode = jwt.decode(req.headers['authorization']||req.body.token);
                // console.log(decode.email)
                User.findOne({"Username":decode.email}, (err, docs) => { //real
                        //        Auth.find({Email:}, (err, docs) => {
                                    res.json({
                                                  success: true,
                                                  docs : docs
                                                
                                  })
                
                })
        })
        app.post('/user/update',cors(),function(req,res){
                console.log(req.body)
                var decode = jwt.decode(req.headers['authorization']||req.body.token);
                console.log(decode.email)
                User.updateMany(
                        {Username:decode.email},
                        { $set: { About :  [{"Age": req.body.age },{"Gender": req.body.gender }, { "AboutMe": req.body.aboutme}]}},
                (err, docs) => { 
                        if(err){

                        } else {
                                res.json({
                                        success: true,
                                        docs : docs
                                                           
                                   })
                        }
                        
                
                })
        })

        //UpdateOne
                // Auth.updateOne({Email : req.body.Email},{$set: {Admin : req.body.Admin}}, function(err, status) {
                // if(err){
                //         console.log(err)
                // }else{
                //         console.log(status)
                // }
                        
                //  })
        

//=================================================================================================================
   


module.exports = app

