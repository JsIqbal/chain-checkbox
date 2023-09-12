const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    sectors: {
        type: Array,
        required: true,
    },
    agree: {
        type: Boolean,
        required: true,
    },
});

module.exports = mongoose.model("User", UserModel);
