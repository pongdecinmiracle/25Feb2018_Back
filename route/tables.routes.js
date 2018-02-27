const express = require('express')
var moment = require('moment');
const cors = require('cors')
var dateFormat = require('dateformat');
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
var strftime = require('strftime')
//====================================================
const secret = require('./lib/secret')
//Database 
const db = require('mongoose')

const node1 = require('../models/node1')
const node2 = require('../models/node2')
const node3 = require('../models/node3')
const test = require('../models/test')
const Rule = require('../models/rule')
const Auth = require('../models/AuthDB')
const User = require('../models/user')

//express for routing
const app = express.Router()


//Show table of Raspberry Pi 1
      app.get('/table1',cors(), function(req, res,next) {
          node1.find({},(err, docs) => {
            res.json(docs)
          })
      })

//Show table of Raspberry Pi 2
      app.get('/table2',cors(), function(req, res,next) {
          node2.find({},(err, docs) => {
            res.json(docs)
          })
      })

//Show table of Raspberry Pi 3
      app.get('/table3',cors(), function(req, res,next) {
          node3.find({},(err, docs) => {
            res.json(docs)
          })
      }) 
  






//Test distinct
app.get('/testdistinct',cors(), function(req, res,next) {

  // var start = new Date().toString("yyyy-MM-dd hh:mm:ss")
  // console.log(start.slice(4,25))
  node1.distinct('timestamp',(err, docs) => {
      
        res.json(docs)
        // console.log(docs)
      }) 
})


//Test
app.post('/testfind',cors(), function(req, res,next) {


      node1.findOne({timestamp : req.body.time},(err, docs) => {
        res.json(docs)
        // console.log(docs)
      }) 
})

//Update_LastDate
app.post('/Update_LastDate',cors(), function(req, res,next) {
  //when logout
    var start = strftime('%F %T', new Date())
    var decode = jwt.decode(req.headers['authorization']||req.body.token);
    // console.log(decode)
    User.updateOne({Username: decode.email},{ Last_Date : start},(err,status)=>{
      // console.log(status)
    })

})

//noti_alert1
app.post('/noti_alert1',cors(), function(req, res,next) {
  var start = strftime('%F %T', new Date())
  var decode = jwt.decode(req.headers['authorization']||req.body.token);
  // console.log(decode)
  User.findOne({Username:decode.email},(err,response)=>{
      var old_date = response.Last_Date1
      // console.log(old_date)
      node1.find({timestamp : { $gte : old_date,$lte : start}},(err, docs) => {
          // console.log(docs)
          res.json(docs)
          var l = docs.length
          User.updateOne({Username: decode.email},{ Alert1_new : l},(err,status)=>{
          })
        }) 
    })
})

//noti_alert2
app.post('/noti_alert2',cors(), function(req, res,next) {
  var start = strftime('%F %T', new Date())
  var decode = jwt.decode(req.headers['authorization']||req.body.token);
  User.findOne({Username:decode.email},(err,response)=>{
      var old_date = response.Last_Date2
      node2.find({timestamp : { $gte : old_date,$lte : start}},(err, docs) => {
          res.json(docs)
          var l = docs.length
          User.updateOne({Username: decode.email},{ Alert2_new : l},(err,status)=>{
          })
        }) 
    })
})

//noti_alert3
app.post('/noti_alert3',cors(), function(req, res,next) {
  var start = strftime('%F %T', new Date())
  var decode = jwt.decode(req.headers['authorization']||req.body.token);
  User.findOne({Username:decode.email},(err,response)=>{
      var old_date = response.Last_Date3
      node3.find({timestamp : { $gte : old_date,$lte : start}},(err, docs) => {
          res.json(docs)
          var l = docs.length
          User.updateOne({Username: decode.email},{ Alert3_new : l},(err,status)=>{
          })
        }) 
    })
})

//all_noti_alert
app.post('/all_noti_alert',cors(), function(req, res,next) {

  var decode = jwt.decode(req.headers['authorization']||req.body.token);
    User.findOne({Username:decode.email},(err,response)=>{
      var total = response.Alert1_new+response.Alert2_new+response.Alert3_new
      res.json(total)
      // console.log(total)
    }) 
})

//clearNotiTable1
app.post('/clearNotiTable1',cors(), function(req, res,next) {
  var start = strftime('%F %T', new Date())
  var decode = jwt.decode(req.headers['authorization']||req.body.token);
    User.updateMany({Username:decode.email},{Alert1_new:0,Last_Date1:start},(err,status)=>{
      // console.log(status)
  })
})
//clearNotiTable2
app.post('/clearNotiTable2',cors(), function(req, res,next) {
  var start = strftime('%F %T', new Date())
  var decode = jwt.decode(req.headers['authorization']||req.body.token);
    User.updateMany({Username:decode.email},{Alert2_new:0,Last_Date2:start},(err,status)=>{
      // console.log(status)
  })
})
//clearNotiTable3
app.post('/clearNotiTable3',cors(), function(req, res,next) {
  var start = strftime('%F %T', new Date())
  var decode = jwt.decode(req.headers['authorization']||req.body.token);
    User.updateMany({Username:decode.email},{Alert3_new:0,Last_Date3:start},(err,status)=>{
      // console.log(status)
  })
})


module.exports = app

/*
1 hour
var end = new Date((new Date().getTime() - (1 * 1 * 60 * 60 * 1000))).toString("yyyy-MM-dd hh:mm:ss").slice(4,25)

Alert
  var start = new Date().toString("yyyy-MM-dd hh:mm:ss").slice(4,25)
  User.updateOne({Email:"aaa"},{ Last_Date : start},(err,status)=>{
    console.log(status)
  })

db.getCollection('alert2s').find({
        timestamp : {$lte : "2018-02-22 19:04:53",$gte : "2018-02-21 19:03:53"}
    })

*/

