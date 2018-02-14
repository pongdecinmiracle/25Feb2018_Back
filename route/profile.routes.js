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

                
                        // var newTrack = {
                        //         Email : req.body.Email,
                        //         Username : req.body.Username,
                        //         Admin : req.body.Admin
                        // }
                        // newTrack= Admin(req.body)
                        // console.log(newTrack);
                        // // console.log(req.body)
                        // newTrack.save((err) => {
                        //   if (err) res.json({ 
                        //             success: false, 
                        //             message: 'Insert Failed.' 
                        //       });
                        //   else res.json({ 
                        //             success: true, 
                        //             message: 'Insert Success.'
                        //       });
                        // })
        })
        app.post('/delete',cors(),function(req,res){
                // console.log(req.body)

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

