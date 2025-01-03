const mongoose  =require('mongoose');

const { Schema } = mongoose;
mongoose.connect("mongodb+srv://ayushplay:j0Bfz7rGgXn3jg6c@cluster0.ymmmd.mongodb.net/paytm");

const userSchema = new Schema({
    firstName : {
        type : String,
        required : true,
        maxLength : 30,
        trim : true
    },
    lastName : {
        type : String,
        trim : true,
        required : true,
        maxLength : 30
    },
    username : {
        type : String,
        minLength : 3,
        maxLength: 30,
        required : true,
        lowercase : true 
    },
    password : {
        type : String,
        required : true,
        maxLength : 15,
        minLength : 4,

    },
})

const accountSchema = new Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true
    },
    balance : {
        type : Number,
        required : true
    }
})
const Account = mongoose.model('Account',accountSchema); 
const User = mongoose.model('User',userSchema);

module.exports = {
    User , Account 
}