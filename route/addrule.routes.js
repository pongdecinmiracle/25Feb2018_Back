const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
const db = require('mongoose')
// const test = require('../models/test')
// const Auth = require('../models/AuthDB')
const Rule = require('../models/rule')

//express for routing
const app = express.Router()

app.route('/')
    .post((req, res) => {
      // console.log(req.body)
      var newTrack = Rule(req.body)
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

module.exports = app

