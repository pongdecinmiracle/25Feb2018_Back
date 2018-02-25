const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RuleSchema = new Schema({
        Type : {type: String},
        Protocol : {type: String},
        Sig_id : {type: String,unique:true},
        Color : {type: String},
        Msg : {type: String},
        Manual : {type : String},
        reg_time : {
                type : Date, default: Date.now
            }
})
// const test = mongoose.model('tests', testSchema)
const rule = mongoose.model('rules', RuleSchema)

module.exports = rule