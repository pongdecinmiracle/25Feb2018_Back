const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testSchema = new Schema({
        type : {type: String},
        event : {
                impact : {type: String},
                "generator-id" : {type: String},
                protocol : {type: String},
                "dport-icode" : {type: String},
                "signature-revision" : {type: String},
                "classification-id" : {type: String},
                "signature-id" : {type: String},
                "sensor-id" : {type: String},
                "impact-flag" : {type: String},
                "sport-itype" : {type: String},
                priority : {type: String},
                "event-second" : {type: String},
                pad2 : {type: String},
                "destination-ip" : {type: String},
                "event-id" : {type: String},
                "mpls-label" : {type: String},
                "vlan-id" : {type: String},
                "source-ip" : {type: String},
                "event-microsecond" : {type: String},
                blocked : {type: String},
        },
        time : {type: String}
})
// const test = mongoose.model('tests', testSchema)
const test = mongoose.model('alerts', testSchema)

module.exports = test

// mongoose.Promise = require('bluebird')

