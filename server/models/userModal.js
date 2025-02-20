const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullName: {type: String, required: true},
    scholarNo: {type: String, required: true, unique: true},
    company: {type: String, required: true},
    role: {type: String, required: true},
    collegeName: {type: String, required: true},
    batchYear: {type: Number, required: true},
    email: {type: String, required: true, unique: true},
    mobileNo: {type: Number, required: true},
    linkedinUrl: {type: String, required: true}
},
{
    timestamps: true
});

const User = mongoose.model("User", userSchema);
module.exports = User;