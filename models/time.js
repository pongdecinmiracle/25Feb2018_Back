const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  reg_time : {
            type : Date, default: Date.now
        },
  timestamps: {
              createdAt: 'create_timestamp',
              updatedAt: 'timestamp'
            }
          
})

const User = mongoose.model('times', UserSchema)

module.exports = time
//==============================================

// required: true

  