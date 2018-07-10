const mongoose = require('mongoose');

const Issue = mongoose.Schema(
    {
        title: {type: String},
        created_at: { type: Date, default: Date.now("<YYYY-mm-dd>") },
        responsible: {type: String},
        description:{type: String},
        severity: {type: String},
        status: {type: String, default: 'Open'},
    },

);

module.exports = mongoose.model('Issue', Issue);
