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
  


module.exports = app
