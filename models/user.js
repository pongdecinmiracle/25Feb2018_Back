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
  reg_time : {
            type : Date, default: Date.now
        }
})

const User = mongoose.model('users', UserSchema)

module.exports = User
//==============================================

// required: true