const mongoose = require('mongoose');
const loanSchema = new mongoose.Schema(
    {
        email : String,
        loan : { type : Number, required : true },

    }
);
module.exports = mongoose.model('Loan',loanSchema);