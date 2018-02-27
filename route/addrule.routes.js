const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
const db = require('mongoose')
// const test = require('../models/test')
// const Auth = require('../models/AuthDB')
// const Rule = require('../models/rule')
const Rule1 = require('../models/alert1_rule')
const Rule2 = require('../models/alert2_rule')
const Rule3 = require('../models/alert3_rule')

//express for routing
const app = express.Router()
//========================== Rule 1 ===================================
//Add Rule to Rule1
  app.route('/addRule1')
    .post((req, res) => {
      // console.log(req.body)
      var newTrack = Rule1(req.body)
      // console.log(newTrack);
      // console.log(req.body)
      newTrack.save((err) => {
        if (err){
          res.json({ 
            success: false, 
            message: 'Insert Failed.' 
          })
        }else{
          res.json({ 
            success: true, 
            message: 'Insert Success.'
          });
        } 
      })
    })

//Add useRule to Rule1
  app.route('/useRule1')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule1.updateOne({Sig_id:req.body.sid},{ Use :"Using"},(err,status)=>{
        // console.log(status)
      })
    })    

//Add unuseRule to Rule1
  app.route('/unuseRule1')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule1.updateOne({Sig_id:req.body.sid},{ Use :"Unusing"},(err,status)=>{
        // console.log(status)
      })
  })

//Add modifyRule to Rule1editRule1
  app.route('/')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule1.updateOne({Sig_id:req.body.sid},{ Type : req.body.type},(err,status)=>{
        // console.log(status)
      })
    }) 

//========================== Rule 2 ===================================
  //Add Rule to Rule2
  app.route('/addRule2')
    .post((req, res) => {
      // console.log(req.body)
      var newTrack = Rule2(req.body)
      // console.log(newTrack);
      // console.log(req.body)
      newTrack.save((err) => {
        if (err){
          res.json({ 
            success: false, 
            message: 'Insert Failed.' 
          })
        }else{
          res.json({ 
            success: true, 
            message: 'Insert Success.'
          });
        } 
      })
    })

  //Add useRule to Rule2
  app.route('/useRule2')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule2.updateOne({Sig_id:req.body.sid},{ Use : "Using"},(err,status)=>{
        // console.log(status)
      })
    }) 

//Add unuseRule to Rule2
  app.route('/unuseRule2')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule2.updateOne({Sig_id:req.body.sid},{ Use :"Unusing"},(err,status)=>{
        // console.log(status)
      })
    })

//Add modifyRule to Rule2
  app.route('/editRule2')
  .post(cors(), function(req, res,next) {
    // console.log(req.body)
    Rule2.updateOne({Sig_id:req.body.sid},{ Type : req.body.type},(err,status)=>{
      // console.log(status)
    })
  }) 

//========================== Rule 3 ===================================
  //Add Rule to Rule3
  app.route('/addRule3')
    .post((req, res) => {
      // console.log(req.body)
      var newTrack = Rule3(req.body)
      console.log(newTrack);
      // console.log(req.body)
      newTrack.save((err) => {
        if (err){
          res.json({ 
            success: false, 
            message: 'Insert Failed.' 
          })
        }else{
          res.json({ 
            success: true, 
            message: 'Insert Success.'
          });
        } 
      })
    })

  
    app.route('/editRule')
    .post(cors(), function(req, res,next) {
      console.log(req.body)
      Rule.updateOne({Sig_id:req.body.sid},{Type :req.body.type},(err,status)=>{
        console.log(status)
      })
  })

//Add useRule to Rule1
  app.route('/useRule3')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule3.updateOne({Sig_id:req.body.sid},{ Use :"Using"},(err,status)=>{
        // console.log(status)
      })
    }) 

//Add unuseRule to Rule3
  app.route('/unuseRule3')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule3.updateOne({Sig_id:req.body.sid},{ Use :"Unusing"},(err,status)=>{
        // console.log(status)
      })
    })

//Add modifyRule to Rule3
  app.route('/editRule3')
    .post(cors(), function(req, res,next) {
      // console.log(req.body)
      Rule3.updateOne({Sig_id:req.body.sid},{ Type : req.body.type},(err,status)=>{
        // console.log(status)
      })
    }) 

//========================== Delete Not Compelete ===================================
//Add modifyRule to Rule1
app.route('/deleteRule1')
.post(cors(), function(req, res,next) {
  Rule1.findOne({Sig_id:req.body.sid_delete},(err, docs) => { 
      Rule1.findOneAndRemove({_id : docs._id}, function (err,offer){
        if(err) { throw err; }
      // console.log(offer)
    })
})
})
//Add modifyRule to Rule2
app.route('/deleteRule')
.post(cors(), function(req, res,next) {
  Rule2.findOne({Sig_id:req.body.sid_delete},(err, docs) => { 
      Rule2.findOneAndRemove({_id : docs._id}, function (err,offer){
        if(err) { throw err; }
      // console.log(offer)
    })
})
})
//Add modifyRule to Rule3
  app.route('/deleteRule')
    .post(cors(), function(req, res,next) {
      Rule3.findOne({Sig_id:req.body.sid_delete},(err, docs) => { 
          Rule3.findOneAndRemove({_id : docs._id}, function (err,offer){
            if(err) { throw err; }
          // console.log(offer)
        })
    })
  })
  

module.exports = app

