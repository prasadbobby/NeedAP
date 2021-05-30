const mongoose = require("mongoose");

const googleUsers = new mongoose.Schema({
    // clinetId: req.user.id,
    // name: req.user.displayName,
    // email: req.user.emails[0].value,
    // img: req.user.photos[0].value,
    clientId:{
        type: String,
        required: true,
        unique: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required: true 
    }

})

const usersData = new mongoose.model("users", googleUsers);
module.exports = usersData;