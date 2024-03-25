const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ServerDataSchema = new Schema({
    sid: {
        type: Number,
    },
    name: {
        type: String,
    },
    members: [{
        type: String,
    }],
    channels: [{
        name: String,
        messages: [String]
    }]
});

module.exports = mongoose.model('server', ServerDataSchema)