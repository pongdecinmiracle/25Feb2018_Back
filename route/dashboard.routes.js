const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
const db = require('mongoose')

const node1 = require('../models/node1')
const node2 = require('../models/node2')
const node3 = require('../models/node3')
const test = require('../models/test')
const Rule = require('../models/rule')
const Auth = require('../models/AuthDB')
const Rule1 = require('../models/alert1_rule')
const Rule2 = require('../models/alert2_rule')
const Rule3 = require('../models/alert3_rule')

//express for routing
const app = express.Router()
  
//=============================== Rule ===============================================

    //Show : Rule in Raspberry Pi 1
      app.get('/Rule1',cors(), function(req, res) {
              
          Rule1.find({},(err, docs) => {
                  res.json(docs)
                })
          })
    //Show : Rule in Raspberry Pi 2
      app.get('/Rule2',cors(), function(req, res) {
                
        Rule2.find({},(err, docs) => {
                res.json(docs)
              })
        })
    //Show : Rule in Raspberry Pi 3
      app.get('/Rule3',cors(), function(req, res) {
                
        Rule3.find({},(err, docs) => {
                res.json(docs)
              })
        })
    
//=============================== Dashboard Circle =====================chartCircle1==========================

    //Show Chart Package for Alert1  : Dashboard Circle
      app.get('/chartCircle1',cors(), function(req, res,next) {
          Rule.aggregate([
            {$lookup:
                {
                  from: "alert1s",
                  localField: "Sig_id",
                  foreignField: "sig_id",
                  as: "alert1s"
                }
           }
         ],(err, docs) => {
          if(err){
          }else{
            res.json(docs)
          }
         })
      })

    //Show Chart Package for Alert2  : Dashboard Circle
      app.get('/chartCircle2',cors(), function(req, res,next) {
        Rule.aggregate([
          {$lookup:
              {
                from: "alert2s",
                localField: "Sig_id",
                foreignField: "sig_id",
                as: "alert2s"
              }
         }
       ],(err, docs) => {
        if(err){
        }else{
          res.json(docs)
        }
       })
      })
    
    //Show Chart Package for Alert3  : Dashboard Circle
      app.get('/chartCircle3',cors(), function(req, res,next) {
        Rule.aggregate([
          {$lookup:
              {
                from: "alert3s",
                localField: "Sig_id",
                foreignField: "sig_id",
                as: "alert3s"
              }
         }
       ],(err, docs) => {
        if(err){
        }else{
          res.json(docs)
        }
       })
    })



        

  
// //Test
// app.post('/test',cors(), function(req, res,next) {
//   Rule.aggregate([
//     {$lookup:
//         {
//           from: "alert1s",
//           localField: "Sig_id",
//           foreignField: "sig_id",
//           as: "alert1s"
//         }
//    }
//  ],(err, docs) => {
//       // console.log(docs)
//         res.json(docs)
//       })
// })


module.exports = app


