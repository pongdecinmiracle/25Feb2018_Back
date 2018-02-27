const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const AuthSchema = new Schema({
  Email: {type: String, unique: true},
  Username: {type:String,unique:true},
  Pass: {type: String,require: true},
  Admin: {type: Number , default: 0},
  Create_Date : {type : Date, default: Date.now},
  Last_Date : {type : Date, default: Date.now}
})

const Auth = mongoose.model('auths', AuthSchema)

module.exports = Auth
//==============================================

// required: true