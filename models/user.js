const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  Email: {type: String, unique: true},
  Username: {type:String,unique:true},
  Pass: {type: String,require: true},
  Admin: {type: Number , default: 0},
  Age: {type: Number , default: null},
  Gender: {type: String ,default: null},
  Aboutme : {type: String , default: null},
  Status:{type: String , default: "Require"},
  Alert1_new : {type: Number , default: 0},
  Alert2_new : {type: Number , default: 0},
  Alert3_new : {type: Number , default: 0},
  Last_Date1 : {type : String, default: Date.now},
  Last_Date2 : {type : String, default: Date.now},
  Last_Date3 : {type : String, default: Date.now},
  Create_Date : {type : Date, default: Date.now},
  Last_Date : {type : String, default: Date.now}
})

const User = mongoose.model('users', UserSchema)

module.exports = User
//==============================================

// required: true