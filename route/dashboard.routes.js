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

//express for routing
const app = express.Router()
  
//Show Chart All Package : Dashboard Histogram
      app.get('/Rule',cors(), function(req, res) {
              
          Rule.find({},(err, docs) => {
                  res.json(docs)
                })
          })
    //Show Chart All Package : Dashboard Histogram
      app.get('/chartHistogram',cors(), function(req, res,next) {
        // console.log(req.body)
        // var a = []
        //   a = req.body.rule
          //[{ proto : "TCP", "sig_id" : "10000005" },{ proto : "TCP", "sig_id" : "10000006" }]
          Rule.aggregate([
            {$lookup:
                {
                  from: "alert1s",
                  localField: "Sig_id",
                  foreignField: "sig_id",
                  as: "alert1s"
                }
           },
           {$lookup:
                {
                  from: "alert2s",
                  localField: "Sig_id",
                  foreignField: "sig_id",
                  as: "alert2s"
                }
           },
           {$lookup:
                {
                  from: "alert3s",
                  localField: "Sig_id",
                  foreignField: "sig_id",
                  as: "alert3s"
                }
           },
         ],(err, docs) => {
          if(err){
          }else{
            res.json(docs)
          }
         })
      })

      app.post('/DatachartHistogram',cors(), function(req, res,next) {
        console.log(req.body)
        var a = []
          a = req.body.rule
          //[{ proto : "TCP", "sig_id" : "10000005" },{ proto : "TCP", "sig_id" : "10000006" }]
          node1.aggregate([
            {$lookup:
                {
                  from: "rules",
                  localField: "sig_id",
                  foreignField: "Sig_id",
                  as: "docs"
                }
           },
           {$unwind : '$docs'},
           {$match : { $or : a }},
           {$group : { _id : "$docs.Sig_id" , total_package: { $sum: 1}}},
           
         ],(err, docs,next) => {
          if(err){

          }else{
           res.json(docs)
          }
         })
      })

        

      
//Show chartCircle1
      app.post('/chartCircle1',cors(), function(req, res,next) {
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
            // console.log(docs)
              res.json(docs)
            })
      })

//Show chartCircle2
app.post('/chartCircle2',cors(), function(req, res,next) {
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
      // console.log(docs)
        res.json(docs)
      })
})

//Show chartCircle3
app.post('/chartCircle3',cors(), function(req, res,next) {
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
      // console.log(docs)
        res.json(docs)
      })
})

//Test
app.post('/test',cors(), function(req, res,next) {
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
      // console.log(docs)
        res.json(docs)
      })
})


module.exports = app


