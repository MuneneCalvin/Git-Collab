import mongoose from "mongoose";

const notification = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    read: {
        type: Boolean,
        default: false
    },
    is_deleted: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Notification', notification);