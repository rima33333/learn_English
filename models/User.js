const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs')
const userSchema  = new mongoose.Schema({
    username: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    } 
})
// hashing function
userSchema.methods.hashPassword = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}
// compare function
userSchema.methods.comparePasswords = (password, hash)=>{
    return bcrypt.compareSync(password,hash)
}

let User = mongoose.model('User', userSchema, 'useree')
module.exports= User