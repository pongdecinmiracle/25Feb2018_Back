const express = require('express')
var moment = require('moment');
const cors = require('cors')
//Database 
const db = require('mongoose')
const test = require('../models/test')
const Auth = require('../models/AuthDB')
// const time = require('../models/time')

//express for routing
const app = express.Router()

// app.use((req, res, next) => {
//     next()
//   })
app.post('/',cors(), function(req, res,next) {
    // test.find({},(err, docs) => {
    //     res.send(docs)
    //   })
    // })


    // test.aggregate([ 
    //     {$match : { $or : [{type: "event", "event.signature-id" : 1000004},{type: "event", "event.signature-id" : 1000005}] }},
    //     {$group : { _id : "$event.signature-id" , total_packet: { $sum: 1}}}
        
    // ],(err, docs) => {
    //     res.json(docs)
    //     // console.log(docs)
    //     // console.log(err)
    //   })

    //Time
    //   time.save(function (err, fluffy) {
    //             if (err) return console.error(err);
    //             else console.log("Save Success");
    //         });

  })

//   app.post('/chart',cors(), function(req, res,next) {
//     // console.log(req.body)
//     a = []
//     a = req.body.rule
//     // console.log(a)
//     test.aggregate([ 
//         {$match : { $or : a}},
//         {$group : { _id : "$sig_id" , total_packet: { $sum: 1}}}
        
//     ],(err, docs) => {
//       if(err){
//         console.log("err")
//       }else{
//         console.log(docs)
//         res.json(docs)
//       }

//       })
//   })

module.exports = app

        //           $group : {
        //               _id : { "signature-id": "100004","destination-ip": "192.168.1.8" },
        //             }

/* POST -- ADD
var ApiAdd = new test({
        name : req.body.name,
        email : req.body.email
      })
      console.log(ApiAdd)
      ApiAdd.save(function (err, fluffy) {
                if (err) return console.error(err);
                else console.log("Save Success");
            });
*/

/* POST -- FIND
test.find(function(err, docsNotFound){
        if(err) console.log(err)
        console.log(docsNotFound)
    });
*/

//   -- Find test -(OK)-
    /*  
    test.find({}, (err, docs) => {
        res.send(docs)
        console.log(docs)
      })
    */

    /*

// -- Add test -(OK)-
        // var myData = new test({
        //         type : {type: String},
        //         event : {
        //             impact : {type: String, defult: null},
        //             "generator-id" : {type: String},
        //             protocol : {type: String},
        //             "dport-icode" : {type: String},
        //             "signature-revision" : {type: String},
        //             "classification-id" : {type: String},
        //             "signature-id" : {type: String},
        //             "sensor-id" : {type: String},
        //             "impact-flag" : {type: String},
        //             "sport-itype" : {type: String},
        //             priority : {type: String},
        //             "event-second" : {type: String},
        //             pad2 : {type: String},
        //             "destination-ip" : {type: String},
        //             "event-id" : {type: String},
        //             "mpls-label" : {type: String},
        //             "vlan-id" : {type: String},
        //             "source-ip" : {type: String},
        //             "event-microsecond" : {type: String},
        //             blocked : {type: String},
        //         },
        //         time : {type: String}
        // })
        // myData.save()
        //   .then(item => {
        //     res.send("item saved to database");
        //   })
        //   .catch(err => {
        //     res.status(400).send("unable to save to database");
        //   });
    */

//    db.alert.aggregate([ 
//     {$match : {type: "event", "event.signature-id" : 1000004}},
//     {$group : { _id : "$event.signature-id" , total_packet: { $sum: 1}}}
// ])


// db.tests.aggregate([ 
//     {$match : {proto : "ICMP" , sig_id : "1000005"}},
//     {$group : { _id : "$sig_id" , total_packet: { $sum: 1}}}
// ])