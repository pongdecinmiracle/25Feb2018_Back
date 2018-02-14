const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const AdminSchema = new Schema({
  Email: {type: String, unique: true},
  Username: {type:String,unique:true},
  Admin: {type: Number , default: 0},
  reg_time : {
            type : Date, default: Date.now
        }
})

const Admin = mongoose.model('admins', AdminSchema)

module.exports = Admin
//==============================================

// required: true